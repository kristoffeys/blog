---
templateKey: blog-post
title: Removing and adding objects to the CollectionType in Sonata
date: 2019-01-20T19:04:10.000Z
description:  >-
  When working with a project in Sonata, I came across an issue where adding and removing objects from the CollectionType field within an admin block just didn't work. Here's what I did to get this to work.
tags:
  - PHP
  - Symfony
  - Sonata
image: /img/collection.jpg
---
Recently I've worked on an application written with the [Sonata bundle](https://sonata-project.org/) for [Symfony](https://symfony.com/). Within this application I needed to make use of the [CollectionType](https://sonata-project.org/bundles/admin/3-x/doc/reference/form_types.html#sonataformtypecollectiontype) within an [admin class](https://sonata-project.org/bundles/admin/3-x/doc/getting_started/creating_an_admin.html). I also needed to be able to add and remove objects to this collection. This is where i encountered an issue. Adding or removing objects didn't work. When trying to remove objects, this did work but the orphaned object remained in the database. When adding an object,
I got the error `A new entity was found through the relationship`.

Underneath I'll use the example of a slider which contains slides. In the slider admin form within Sonata, you should be able to add and remove slides.

When browsing through the internet, I found the following solutions:
In order to be able to add new objects (`Slide`), you need to set `cascade={"persist"}` on your relationship within your entity (`Slider`):

```php

/**
* @var \Doctrine\Common\Collections\ArrayCollection
* @ORM\OneToMany(
*     targetEntity="Slide",
*     fetch="EAGER",
*     cascade={"persist"},
*     mappedBy="slider"
* )
* @ORM\OrderBy({"order" = "ASC"})
*/
private $slides;

```

In order to remove orphaned objects (`Slide`), you should set the `orphanRemoval=true`option within your entity (`Slider`):

```php

/**
* @var \Doctrine\Common\Collections\ArrayCollection
* @ORM\OneToMany(
*     targetEntity="Slide",
*     fetch="EAGER",
*     cascade={"persist"},
*     mappedBy="slider",
*     orphanRemoval=true
* )
* @ORM\OrderBy({"order" = "ASC"})
*/
private $slides;

```

For me both solutions didn't work. What I eventually did to solve the issue was within my Admin Class (`sliderAdmin`), adding the following code:

```php

public function prePersist($slider)
{
  $this->preUpdate($slider);
}

/** @param Slider $slider */
public function preUpdate($slider)
{
  /* Create unexisting slides */
  foreach($slider->getSlides() as $slide) {
    if(null === $slide->getId()) {
      $this->getModelManager()->create($slide);
    }
  }

  /* remove orphans */
  $slides = $this->getForm()->get('slides')->getIterator();
  foreach ($slides as $slide) {
    $entity = $slide->getData();
    if(null === $entity->getSlider()) {
      $this->getModelManager()->delete($entity);
    }
  }
}

```

First of all it does the same actions before persisting and before updating the entity (`Slider`). We loop through the submitted object (`Slider`)) it's children (`Slide`) and check if the id is null. If the id is null, we know that this is a new child (`Slide`) within the relationship and we create it.

After this we loop through the forms slide fields. This contains all slides that are visible on the form. We need to do this, because when looping through the object (`Slider`) it's children (`Slide`), the removed children (`Slide`) wouldn't be contained in the loop.
When looping through the slides in the form, we retrieve the data (entity) for the child (`Slide`) and check if the parent object (`Slider`) is null. If this is the case the child (`Slide`) has been removed from the object (`Slider`) and can be safely deleted.

The above is possible because in our `removeSlide` function in our entity `Slider`, we remove the reference to the slider:

```php

public function removeSlide(Slide $slide) {
  $slide->setSlider(null);
  $this->slides->removeElement($slide);
}

```

---
templateKey: blog-post
title: Avoiding mocking libraries
date: 2019-09-24T16:04:10.000Z
description: >-
  While struggling to find a way to avoid complex and complicated mocking of certain objects I encountered an easier way to mock certain objects using anonymous classes.
tags:
  - PHP
  - PHPUnit
image: /img/mocking.jpg
---
While working on a project, I struggled with mocks in a way that they weren't really self-explanatory and sometimes even complex. In my search to find a way to make them easier to understand I encountered an [excellent article](https://steemit.com/php/@crell/don-t-use-mocking-libraries) about another way to look at this issue.

A simple example of a mock I had was one for a geolocator class:
```php
$geolocator = $this->createMock(Geolocator::class);
$geolocator
    ->method('geolocate')
    ->willReturn(Geolocation::fromLatLng(0, 0));
```

As you can see in the above example. We're mocking a `geolocate` method that returns a `Geolocation` Object from a certain latitude and longitude (in this example, both 0).

When using the strategy explained in the article, no mock library is used. Instead we're using an anonymous class to achieve the same result.

```php
$geolocator = new class extends Geolocator {
    public function __construct() {}
    public function geolocate(Address $address): Geolocation {
        return Geolocation::fromLatLng(0, 0);
    }
};
```

As you can see, this code is only slightly longer, but to me it's a lot more comprehensive. All we had to do was create an anonymous class that extends the class we want to mock. Override the constructor (in case some dependencies are defined via the original constructor). And override the method in which we want to define the returned value.

To me, the main advantage of this way of working is the readability. An added bonus is that it's faster and there's no need to learn a new library.

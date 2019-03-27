---
templateKey: 'blog-post'
title: 'Implementing a dependency injection container in Zend Framework 1'
date: 2018-10-15T15:04:10.000Z
description: >-
  I've been working on improving a legacy application that was built in Zend Framework 1. In order to improve the overall structure of the code, and to be able to factor out Zend_Registry and other static methods we wanted to add a DIC (Dependency Injection Container).
tags:
  - PHP
  - Zend Framework
image: /img/injection.jpg
---

I've been working on improving a legacy application that was built in Zend Framework 1 (ancient, I know). In order to improve the overall structure of the code, and to be able to factor out Zend_Registry and other static methods we wanted to add a DIC (Dependency Injection Container).

We opted to use the [container from ThePHPLeague](https://github.com/thephpleague/container). In order to be able to implement and use it in Zend Framework 1, some integrations needed to be written.

We started by creating an interface 'Injectable' that controllers could use in order to show that these controllers are depending on certain classes.

``` php
interface Injectable
{
    /**
     * Return array of dependencies to resolve from DIC and inject into controller
     * Keys are the property to inject on (e.g., repository)
     * Values are class names to resolve from the Container (e.g., Domain\Whatever\Service)
     */
    public function getDependencies(): array;
}
```

Once this is done we can implement the interface in the controllers, and use the function:

``` php
/** @var \Psr\Log\LoggerInterface */
public $logger;

public function getDependencies(): array
{
    return ['logger' => LoggerInterface::class];
}
```

This will inject the LoggerInterface service in the logger variable. Once we're done, we can use the logger in the controller by simply calling `$this->logger->log("Hello World");`

Now that our controllers are ready to accept dependencies, we need to define them.
In order to make the container available in our application we need to initialize it in our `bootstrap.php` file. This can be done by adding the following function to our bootstrap file:

``` php
protected function _initContainer()
{
    $aggregate = new \League\Container\Definition\DefinitionAggregate(include APPLICATION_PATH . '/configs/services.php');
    $container = new League\Container\Container($aggregate);
    $container->delegate(new League\Container\ReflectionContainer);
    return $container;
}
```

Note that We chose to define our services in a seperate config file which returns an array of all the functions. Underneath you'll find an example of our `services.php` file:

``` php
use League\Container\Definition\Definition;
use Psr\Log\LoggerInterface;
use Monolog\Logger;

return [
    (new Definition(LoggerInterface::class, Logger::class))->setShared(),
];
```

Now that we've set up our services. We should make them available to the container. First we'll create an action helper that makes our dependencies available in the controllers:

``` php
use League\Container\Container;

class DependencyInjector extends \Zend_Controller_Action_Helper_Abstract
{
    public function preDispatch(): void
    {
        $bootstrap  = $this->getFrontController()->getParam('bootstrap');
        $controller = $this->getActionController();

        if (! $controller instanceof Injectable) {
            return;
        }

        $container = $bootstrap->getResource('container');
        if (! $container instanceof Container) {
            return;
        }

        foreach ($controller->getDependencies() as $property => $className) {
            if (! $container->has($className)) {
                $message = \sprintf('No class named %s found in configured DI Container', $className);
                throw new \OutOfRangeException($message);
            }

            $controller->$property = $container->get($className);
        }
    }
}
```

This code simply checks if our controller implements the `Injectable` interface and if the container is available, it'll check the `getDependencies` function, and loop through the array. It then will fill the controllers property with the service that is defined in our container.

Now all we need to do, to make all of this functional, is initialize the action helper by adding the following code to our bootstrap class:

``` php
protected function _initDependencyInjector()
{
    $this->bootstrap('container');

    Zend_Controller_Action_HelperBroker::addHelper(
        new DependencyInjector()
    );
}
```

Boom! We're done.

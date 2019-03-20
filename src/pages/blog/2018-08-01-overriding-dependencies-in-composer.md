---
templateKey: blog-post
title: Overriding dependencies in Composer
date: 2018-08-01T15:04:10.000Z
description: Recently I encountered a bug in an open-source library I was using in a project. Like a good citizen, I fixed the bug and submitted a pull request. However it takes some time until the pull request is actually merged and available in a release of this library.
tags:
  - PHP
  - composer
image: /img/composer.jpg
---

Recently I encountered a bug in an open-source library I was using in a project. Like a good citizen, I fixed the bug and submitted a pull request. However it takes some time until the pull request is actually merged and available in a release of this library.

Since the bug was braking for us, we needed the fix asap. In order to be able to use our fix, we looked for a way to override dependencies in Composer. We ended up following this scenario:

- Fork the repository of the library
- commpit and publish the bugfix in a branch of our fork
- Submit a pull request
- Override dependency with our version in Composer.

Since in our case, other libraries were also depending on this specific library (and they required a stable version), we needed to create an alias for our branch so that the other libraries were 'tricked' into thinking that we were providing a stable version of the library:

``` json
{
    "require": {
        "vendor/brokenLibrary": "dev-OurFixBranch as 3.0.0"
    },
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/yourCompany/yourRepo.git"
        }
    ]
}
```

Our custom Branch "OurFixBranch" will override version 3.0.0 of the "brokenLibrary" which is compatible with our other libraries. Once the fix is released in an official version, we can remove this code & require the fixed version.

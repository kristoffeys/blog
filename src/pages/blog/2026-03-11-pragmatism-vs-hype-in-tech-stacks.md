---
templateKey: blog-post
title: "Rust, WebAssembly, and the Hype Cycle: What SMBs Actually Need to Scale"
date: 2026-03-11T10:00:00.000Z
description: >-
  For most mid-sized companies, boring technologies like PHP, JavaScript, and Python are more profitable than cutting-edge ones. Here's why pragmatism beats hype when choosing your tech stack.
tags:
  - engineering
  - architecture
  - opinion
image: /img/pragmatism.jpg
---

There's something every experienced engineer knows but rarely says out loud: **choosing a technology is not primarily a technical decision. It's a business decision.**

## The Shiny New Toy Syndrome

Every year, the tech industry produces a new batch of tools that promise to revolutionize how we build software. Rust will eliminate all memory bugs. WebAssembly will replace JavaScript. Kubernetes will solve deployment forever. AI will replace all developers.

The pattern is predictable. A new technology emerges, early adopters write blog posts, conference talks multiply, ... Six months later, the same early adopters start writing "lessons learned" posts about the hidden costs they didn't anticipate.

I've watched this cycle repeat for over a decade. And the companies that consistently ship products and grow are rarely the ones chasing the latest trend. They're the ones making deliberate, boring choices.

## The Hidden Cost of "Better" Technology

Most companies aren't building operating systems. They're building CRUD applications, dashboards, APIs, and e-commerce platforms. For these use cases, the advantages of some shiny new language or framework are dwarfed by practical concerns:

**Hiring.** Try hiring five developers knowing this new technology in a mid-sized European city. Now try hiring five PHP or JavaScript developers. The difference in timeline, cost, and candidate pool is enormous. A technology is only as good as the team you can build around it.

**Ecosystem maturity.** Need an OAuth library? A PDF generator? A payment gateway integration? In PHP or JavaScript, you'll find battle-tested options with years of production use. In newer ecosystems, you'll find promising libraries with breaking changes every other release.

**Maintenance.** Code is read far more often than it's written. When a developer leaves and someone else inherits their web service using a shiny new niche language or framework, the maintenance burden is categorically different from inheriting a 'regular' application. The pool of developers who can confidently maintain the code determines your long-term cost of ownership.

**AI tooling.** Here's one that's easy to overlook: AI coding assistants like Copilot and Claude are dramatically better at generating and understanding code in mainstream languages. The training data for PHP, Python, and JavaScript dwarfs that of niche languages. So choosing boring tech also means your AI tools are more effective. Your team gets a bigger productivity multiplier from AI when working in well-documented, widely-used technologies.

## Boring Technology Pays the Bills

[Dan McKinley's "Choose Boring Technology"](https://mcfunley.com/choose-boring-technology) talk remains one of the most important pieces of engineering wisdom ever published. His core argument: every company has a limited number of "innovation tokens," and you should spend them on things that directly differentiate your business.

If you're building a SaaS product, your competitive advantage is not your programming language. It's your domain expertise, your user experience, your go-to-market strategy. The tech stack is a means to an end.

PHP powers a shocking percentage of the internet — WordPress alone accounts for over 40% of all websites. Python runs the backends of companies from Instagram to Stripe. Java, despite being the punchline of countless jokes, runs the financial infrastructure of the world. These technologies aren't popular because engineers are ignorant. They're popular because they work, they're well-understood, and they have massive communities that produce solutions to virtually every problem you'll encounter.

## When Does New Technology Make Sense?

I'm not arguing that you should never adopt new technologies. I'm arguing that you should be honest about *why* you're adopting them.

Legitimate reasons to adopt a newer technology:

- **Your problem genuinely requires it.** If you're writing a game engine, a browser, or a high-frequency trading system, You might need performance characteristics (from e.g. Rust) that are non-negotiable.
- **You've exhausted the capabilities of your current stack.** If your Python service genuinely can't handle the throughput you need after proper optimization, it might be time to rewrite the hot path.
- **The ecosystem has matured enough.** There's a world of difference between adopting React in 2015 (risky but reasonable) and adopting it in 2020 (established and well-supported).

Illegitimate reasons:

- "It's what everyone's talking about at conferences."
- "Our engineers are bored with the current stack."
- "We need to attract better talent." (You attract talent with interesting problems and good culture, not with language choices.)
- "Our current stack is too slow." (Have you actually profiled it? Nine times out of ten, the bottleneck is a missing database index or an N+1 query, not the language runtime.)

## The Real Competitive Advantage

The companies that win aren't the ones with the fanciest tech stacks. They're the ones that ship consistently, respond to customer feedback quickly, and maintain their systems reliably over years.

You achieve that with a team that deeply understands their tools, a codebase that any competent developer can navigate, and an architecture that's simple enough to reason about at 2 AM during an incident.

That's almost never the newest, most technically impressive option. It's the boring one. The one with a thousand Stack Overflow answers. The one your next hire already knows. And yes, the one your AI assistant is best at, too.

Choose accordingly.

# Rationale

## Background

Shopify is an amazing platform for starting and growing a business. As much as
it's an e-commerce company, it is an entrepreneurship company. Its product
offering provides solutions to common problems merchants encounter. Key to
running a business on Shopify is a merchant's storefront. While
[Hydrogen](https://hydrogen.shopify.dev) and
[Oxygen](https://shopify.dev/docs/custom-storefronts/hydrogen/deployments/oxygen-runtime)
exist to provide a headless option, the predominant way to build to a Shopify
storefront is using Online Store. It is the most tightly integrated with the
broader Shopify ecosystem of apps and extensions.

Shopify provides a marketplace filled with ready-to-use themes. For many
merchants just starting out, using one of these themes is good enough to get
started. However, as a brand grows and develops its own voice, the weaknesses
of a pre-built theme become apparent. While a developer can customize a theme,
they are modifying what is intended as a finished product.

In general, unless a pre-built theme adheres to a strict policy of not using
any build steps, a developer loses access to the source code. The theme code
found in the admin is the result of the developer's build process. In some
cases, a theme developer will provide access to the source files for compiled
parts of a theme like Brickspace Lab does with their 
[theme toolkits](https://github.com/BrickspaceLab). 
In general, access to the source code for a theme is rare.

Gaining access to a theme's source code is only one challenge faced when
building a custom storefront. What makes a storefront is more than a theme.
It's the unique combination of theme, third-party integrations, and apps. We
call this combination of components the "storefront stack."

There a hundreds of decisions to make when deciding your storefront stack. As
an agency, The Beyond Group is paid to have thoughtful, measured opinions about
what works together. Our merchants look to us to help them make progress in
their job of selling their products to customers. They want these decisions
handled. Therefore, it's a benefit if we have curated solutions to common
problems in Shopify.

At The Beyond Group, we are often called in to help take a store to the next
level of revenue and find our merchants' themes a klaidescope of different
development styles and levels of quality. This often happens because the
merchant is not technical and optimizes for cost in the early days of their
store. Multiple freelancers or agencies have changed the source code, each
taking a slightly different approach. It's our job to untangle the mess while
systematically adding value to the merchant's theme. A theme isn't just some
code a merchant uses to sell products. We believe it is a core asset to their
business.

## Problem(s)

What is interesting about ecomm is most stores have the same set of features.
It's how the features are composed to serve the brand and product that is
unique to the merchant. As an agency serving merchants who want to ensure their
brand's unique voice in the world, we regularly build similar features for
multiple merchants. This is an opportunity to reuse code.

Some may say this problem is already solved with pre-built themes. Just use a
pre-built theme for your merchant and you won't have build features more than
once. Unfortunately, it's not that simple. It's hard to infuse a brand into a
pre-existing theme and customize some of the more complex pieces of business
logic without editing code.

We need the ability to reuse features, while retaining our ability to modify
them to meet the unique needs of a brand.

Closely related is the role of a design system. A design system sets the rules
for how to infuse a merchant's brand into the components defining the
storefront. It is a set of building blocks that keeps designs consistent and
reduces the time it takes to create a unique composition.

As an agency, we need tools to support the use of a design system and pre-built
functionality.

## Solution

Our solution for this problem is Porter and Packs. Porter is a storefront
framework for Shopify Online Store. It is a curated set of opinions on how best
to do Shopify development based on our hard earned experience as an agency. It
establishes conventions on where to put code and how to write it.

Others have tackled this problem before. In fact, Shopify once maintained
[Slate](https://github.com/Shopify/slate), which was their solution to this problem.

What Porter contributes is a fresh take on resusability. Full-stack web
frameworks like Ruby on Rails, Phoenix, and Laravel provide CLIs to scaffold
features from pre-defined code. Porter provides a similar set of commands for
Shopify storefront development. Porter also takes the concept of scaffolds
further by introducing Packs.

A [Pack](/docs/spec-pack.md) combines a scaffold and component library. It
allows you to scaffold sections and snippets from a curated set that you or the
community write.



# Porter

Porter is a storefront framework for Shopify stores. The purpose of the
framework is to provide an opinionated way to organize and build a Shopify
storefront.

Porter eases the burden of maintaining a Shopify store.

## Goals

The team at [The Beyond Group](http://thebeyondgroup.com) builds Porter to
make custom theme development more efficient.

In the course of serving clients, we've found ourselves repeatedly building
the same features for merchants, with slight variations. We build Porter
to make our efforts as consultants easier. Porter is a tool that allows
us to bring order to the stores we've been engaged to maintain. It's a tool
that's built to acclerate development of the most common storefront features by
allowing us to jump to the work that makes a merchant unique.

## Porter embraces Shopify

Porter embraces Shopify as a platform. There is much to love about Shopify and
in building storefronts for Shopify we have found that is better to embrace the
Shopify way than fight it. Workarounds are periodically necessary to handle
limitations with the platform.

## Porter is a CLI

As developers, we live in the shell. Porter embraces this reality and provides
a suite of commands to make storefront development more efficient.

## Porter is not a build system

Porter is not a build system. Porter provides configurations for open source
build tools. vite, webpack, parcel, and others are excellent tools. We see no
reason to re-invent the wheel, but rather adapt these tools to front-end
development in the context of Shopify storefronts.

## Porter embraces the monorepo

A storefront consists of many parts: theme, apps, checkout UI extensions,
functions, and more. We think these parts are best managed when they are in a
singular repository. It reduces cognitive overhead and makes it easier to
reason about how all the pieces are put together. A storefront can't be a
strict monolith, but this gets us closer.

## Porter is extensible

Key to Porter is a pack. A pack is collection of code that allows easy reuse,
while remaining customizable. More to come soon!

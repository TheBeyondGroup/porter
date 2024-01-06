# Pack Specification

Packs are one of the things that make Porter unique as a tool for building
Shopify storefronts. Beyond a build system and a way to organize your
storefront code, Porter enables developers to build sets of components.
These sets of components are called Packs.

## Folder Structure

Example:

```
example-pack
├── accordion
│   ├── accordion.js
│   ├── accordion.snippet.liquid
│   └── carry.json
├── carry.json
├── full-width-banner
│   ├── carry.json
│   └── full-width-banner.section.liquid
├── google-tag-manager
│   ├── carry.json
│   ├── pixel-google-tag-manager.snippet.liquid
│   └── settings_schema.json
├── readme.md
└── shared
    └── image.snippet.liquid
```

Inside a pack, each component is placed in a folder.

Without a `carry.json`, when the component is imported, Porter will create a
folder in `components` matching the component's name and copy in the files.

Files common shared across multiple components can be placed in `shared`

## `carry.json`

A component can define a `carry.json` file. It defines the operations Porter
should do to place the component into the theme.

A global `carry.json` defines any additional steps necessary to install all packs.

**Operations (DRAFT)**

* Output message
* Install a JS package
* Append code to file
* Prepend code to file
* Insert code into a file at a location noted by pattern.

Proposed structure

```
{command: "log", options: {text: "Hello World"}}
```

## Worfklow

To build a pack, use the `porter pack extract` to copy components from the theme
componenet directories to the local pack store (`./.porter`).

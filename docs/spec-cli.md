# Spec

_This document represents a place to think through the Port CLI spec_

## `porter new --name <project name>`

Given just the `--name` flag, this command creates a new storefront.

Flags:

- `-n`, `--name` is required
- `-b`, `--build` sets build system, defaults to: [WEBPACK]
- `-c`, `--css` sets the CSS approach, defaults to [TAILWIND]
- `-s`, `--source-code-host` sets the source code host, defaults to [GITHUB]
- `-p`, `--package` sets the node package manager, defaults to [YARN]

## `porter migrate --from <path>`

Given the `--from` flag, this command moves the contents of the standard Shopify
theme directories and places them in the Porter structure.

All JS, CSS, asset files are moved to the corresponding static folders.

Flags:

- `-f`, `--from` is required

## `porter pack carry --pack <pack name>`

Given the `--pack` flag, this command installs all the pack components in the pack.

Flags:

- `-p`, `--pack` is required

## `porter pack carry --pack <path to pack> --component <component name>`

Given the `--pack` and `--component` flags, this command installs a component from a pack.

Flags:

- `-p`, `--pack` is required
- `-c`, `--component` is optional, picks the component to carry from the pack

## `porter pack carry --pack <path to pack> --component <component> --file <file>`

Given the `--pack`, `--component`, and `--file` flags, this command copies just the passed name
into it's corresponding component

Flags:

- `-p`, `--pack` is required
- `-c`, `--component` is optional, picks the component to carry from the pack
- `-f`, `--file` is optional, picks the file in the component to carry from the pack; carry.json commands are not run

## `porter pack extract --pack <pack name> --component <component name>`

Given the `--pack` and `--component` flags, this command copies the contents of the `theme/components` folder
to the local pack. It creates an empty `carry.json` command.

Flags:

- `-p`, `--pack` is required
- `-c`, `--component` is requried, picks the component to copy to the pack

## `porter generate section --name <section name> --with-js --with-css`

Given the `--name` flag, this command generates a new section in `theme/sections`. Depending whether the boolean
flags `--with-js` or `--with-css` are passed determines if a JS or style block is added to the section.

Flags:

- `-n`, `--name` is required, name of the section
- `--with-css` is optional
- `--with-js` is optional

## `porter generate snippet --name <snippet name>`

Given the `--name` flag, this command generates a new snippet in `theme/snippets`.

Flags:

- `-n`, `--name` is required, name of the snippet

## `porter generate component --name <component name>`

Given the `--name` flag, this command generates a new folder in `theme/components` with the passed name.

Flags:

- `-n`, `--name` is required, name of the component

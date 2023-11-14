# Spec

_This document represents a place to think through the Port CLI spec_

## `porter new --name <project name>`

Given just the `--name` flag, this command creates a new storefront.

Flags:

* `-n`, `--name` is required
* `-b`, `--build` sets build system, defaults to: [CHOOSE]
* `-c`, `--css` sets the CSS approach, defaults to [TAILWIND]
* `-s`, `--scm` sets the SCM, defaults to [GITHUB]
* `-p`, `--package` sets the node package manager, defaults to [YARN]

## `porter migrate --from <path>`

Given the `from` flag, this command moves the contents of the standard Shopify
theme directories and places them in the Porter structure.

Flags:

* `-f`, --from` is required


<!-- commands -->
* [`porter hello PERSON`](#porter-hello-person)
* [`porter hello world`](#porter-hello-world)
* [`porter help [COMMANDS]`](#porter-help-commands)
* [`porter plugins`](#porter-plugins)
* [`porter plugins:install PLUGIN...`](#porter-pluginsinstall-plugin)
* [`porter plugins:inspect PLUGIN...`](#porter-pluginsinspect-plugin)
* [`porter plugins:install PLUGIN...`](#porter-pluginsinstall-plugin-1)
* [`porter plugins:link PLUGIN`](#porter-pluginslink-plugin)
* [`porter plugins:uninstall PLUGIN...`](#porter-pluginsuninstall-plugin)
* [`porter plugins:uninstall PLUGIN...`](#porter-pluginsuninstall-plugin-1)
* [`porter plugins:uninstall PLUGIN...`](#porter-pluginsuninstall-plugin-2)
* [`porter plugins update`](#porter-plugins-update)

## `porter hello PERSON`

Say hello

```
USAGE
  $ porter hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `porter hello world`

Say hello world

```
USAGE
  $ porter hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ porter hello world
  hello world! (./src/commands/hello/world.ts)
```

## `porter help [COMMANDS]`

Display help for porter.

```
USAGE
  $ porter help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for porter.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `porter plugins`

List installed plugins.

```
USAGE
  $ porter plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ porter plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/index.ts)_

## `porter plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ porter plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ porter plugins add

EXAMPLES
  $ porter plugins:install myplugin 

  $ porter plugins:install https://github.com/someuser/someplugin

  $ porter plugins:install someuser/someplugin
```

## `porter plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ porter plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ porter plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/inspect.ts)_

## `porter plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ porter plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ porter plugins add

EXAMPLES
  $ porter plugins:install myplugin 

  $ porter plugins:install https://github.com/someuser/someplugin

  $ porter plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/install.ts)_

## `porter plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ porter plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ porter plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/link.ts)_

## `porter plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ porter plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ porter plugins unlink
  $ porter plugins remove
```

## `porter plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ porter plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ porter plugins unlink
  $ porter plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/uninstall.ts)_

## `porter plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ porter plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ porter plugins unlink
  $ porter plugins remove
```

## `porter plugins update`

Update installed plugins.

```
USAGE
  $ porter plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.1/src/commands/plugins/update.ts)_
<!-- commandsstop -->

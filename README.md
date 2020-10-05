drwade
======

A CLI to help you building your applications 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/drwade.svg)](https://npmjs.org/package/drwade)
[![Downloads/week](https://img.shields.io/npm/dw/drwade.svg)](https://npmjs.org/package/drwade)
[![License](https://img.shields.io/npm/l/drwade.svg)](https://github.com/Dr-Wade/drwade-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g drwade
$ drwade COMMAND
running command...
$ drwade (-v|--version|version)
drwade/0.0.0 win32-x64 node-v12.13.1
$ drwade --help [COMMAND]
USAGE
  $ drwade COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`drwade autocomplete [SHELL]`](#drwade-autocomplete-shell)
* [`drwade generate:project [FILE]`](#drwade-generateproject-file)
* [`drwade hello [FILE]`](#drwade-hello-file)
* [`drwade help [COMMAND]`](#drwade-help-command)

## `drwade autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ drwade autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ drwade autocomplete
  $ drwade autocomplete bash
  $ drwade autocomplete zsh
  $ drwade autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src\commands\autocomplete\index.ts)_

## `drwade generate:project [FILE]`

describe the command here

```
USAGE
  $ drwade generate:project [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\generate\project.ts](https://github.com/Dr-Wade/drwade-cli/blob/v0.0.0/src\commands\generate\project.ts)_

## `drwade hello [FILE]`

describe the command here

```
USAGE
  $ drwade hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ drwade hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/Dr-Wade/drwade-cli/blob/v0.0.0/src\commands\hello.ts)_

## `drwade help [COMMAND]`

display help for drwade

```
USAGE
  $ drwade help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->

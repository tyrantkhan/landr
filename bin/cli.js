#!/usr/bin/env node

/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

/**
 * @module Lander.CLI
 */

 require('babel-register')()
const yargs = require('yargs')
const chalk = require('chalk')
const lander = require('../lib/lander')
const packageJSON = require('../package.json')

const showErrorAndQuit = (error) => {
  console.error(chalk.red(error.message))
  console.error(chalk.red(error.stack))
  console.error('Join our Gitter channel if you need any help!')
  console.error('  https://gitter.im/resin-io/lander')
  process.exit(1)
}

const argv = yargs
  .usage('Usage: $0 [OPTIONS]')
  .help()
  .version(packageJSON.version)
  .options({
    help: {
      describe: 'show help',
      boolean: true,
      alias: 'h'
    },
    version: {
      describe: 'show version number',
      boolean: true,
      alias: 'v'
    }
  })
  .example('$0 --current 1.1.0')
  .fail((message) => {
    // Prints to `stderr` by default
    yargs.showHelp()

    console.error(message)
    process.exit(1)
  })
  .argv

lander.compile({
  config: argv.config
}).then(lander.serve)
  .catch((err) => {
    return showErrorAndQuit(err)
  })

process.on('uncaughtException', showErrorAndQuit)

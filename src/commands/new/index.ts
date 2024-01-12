import {Command, Flags} from '@oclif/core'

import {newProject} from '../../services/project/new.js'

export default class New extends Command {
  static description = 'Create a new Porter project'

  static flags = {
    build: Flags.string({
      char: 'b',
      default: 'webpack',
      description: 'Build system for use in the project',
    }),
    css: Flags.string({
      char: 'c',
      default: 'tailwind',
      description: 'CSS system',
    }),
    'deploy-strategy': Flags.string({
      char: 'd',
      default: 'blue-green',
      description: 'Deployment strategy',
    }),
    name: Flags.string({
      char: 'n',
      description: 'Name of project',
      required: true,
    }),
    'package-manager': Flags.string({
      char: 'p',
      default: 'yarn',
      description: 'node package manager',
    }),
    scm: Flags.string({
      char: 's',
      default: 'github',
      description: 'Source management system',
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(New)
    await newProject(flags.name)
  }
}

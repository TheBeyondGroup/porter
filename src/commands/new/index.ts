import { Command, Flags } from '@oclif/core'
import { newProject } from '../../services/project/new.js'

export default class New extends Command {
  static description = 'Create a new Porter project'

  static flags = {
    name: Flags.string({
      char: 'n',
      description: 'Name of project',
      required: true
    }),
    build: Flags.string({
      char: 'b',
      description: 'Build system for use in the project',
      default: 'vite'
    }),
    css: Flags.string({
      char: 'c',
      description: 'CSS system',
      default: 'tailwind'
    }),
    scm: Flags.string({
      char: 's',
      description: 'Source management system',
      default: 'github'
    }),
    "package-manager": Flags.string({
      char: 'p',
      description: "node package manager",
      default: 'yarn'
    })
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(New)
    await newProject(flags.name)
  }
}

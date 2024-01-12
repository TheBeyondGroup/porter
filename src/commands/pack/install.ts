import {Command, Flags} from '@oclif/core'

import {install} from '../../services/pack/install.js'

export default class Install extends Command {
  static description = 'Install pack from GitHub repo'

  static flags = {
    global: Flags.boolean({
      char: 'g',
      default: false,
      description: 'whether the pack should be installed globally',
      required: false,
    }),
    repo: Flags.string({
      char: 'r',
      description: 'repository containing pack',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Install)
    await install(flags.repo, flags.global)
  }
}

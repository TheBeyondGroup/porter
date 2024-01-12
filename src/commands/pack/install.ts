import {Command, Flags} from '@oclif/core'

import {install} from '../../services/pack/install.js'
import {GIT_PROTOCOLS} from '../../utilities/constants.js'

export default class Install extends Command {
  static description = 'Install pack from GitHub repo'

  static flags = {
    global: Flags.boolean({
      char: 'g',
      default: false,
      description: 'whether the pack should be installed globally',
      required: false,
    }),
    protocol: Flags.string({
      char: 'p',
      default: 'SSH',
      description: 'protocol to use when cloning git repos',
      options: GIT_PROTOCOLS,
    }),
    repo: Flags.string({
      char: 'r',
      description: 'repository containing pack',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Install)
    await install(flags.repo, flags.global, flags.protocol)
  }
}

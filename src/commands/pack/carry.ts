import {Command, Errors, Flags} from '@oclif/core'
import {errorHandler} from '@shopify/cli-kit/node/error-handler'

import {carry} from '../../services/pack/carry.js'

export default class Carry extends Command {
  static description = 'Copy file from pack'

  static flags = {
    component: Flags.string({
      char: 'c',
      default: '',
      description: 'name of component installed from pack',
    }),
    file: Flags.string({
      char: 'f',
      default: '',
      description: 'picks the file in the component to carry from the pack; carry.json commands are not run',
    }),
    pack: Flags.string({
      char: 'p',
      default: '',
      description: 'name of pack to install',
      require: true,
    }),
  }

  async catch(error: Error & {exitCode?: number | undefined}): Promise<void> {
    await errorHandler(error, this.config)
    return Errors.handle(error)
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Carry)
    await carry(flags.pack, flags.component, flags.file)
    // What kind of outputs do we need?
    //  oclif will manage making sure we get the right arguments
    //  error if the pack doesn't exist in a depot
    //  error if the component doesn't exist in the pack
    //  progress as files are moved; should be able to do the file operations in parallel
    //  progress as carry file commands are executed
    //  summary when steps are complete
  }
}

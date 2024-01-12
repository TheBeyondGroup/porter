import {carryPack, carryPackComponent, carryPackComponentFile} from '../../utilities/pack.js'

export async function carry(pack: string, component: string, file: string) {
  if (component.length > 0 && file.length > 0) {
    return carryPackComponentFile(pack, component, file)
  }

  if (component.length > 0) {
    return carryPackComponent(pack, component)
  }

  return carryPack(pack)
}

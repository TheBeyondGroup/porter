import {AbortError} from '@shopify/cli-kit/node/error'
import {copyFile, fileExists, findPathUp, glob} from '@shopify/cli-kit/node/fs'
import {outputContent, outputToken} from '@shopify/cli-kit/node/output'
import {basename, cwd, joinPath, resolvePath} from '@shopify/cli-kit/node/path'

import {executeCarryFile, loadCarryFile} from './carry-file.js'
import {CARRY_FILE, LOCAL_PORTER_DIRECTORY} from './constants.js'

export enum Depot {
  Local,
  Global,
  NotFound,
}

export type FileMove = {
  dest: string
  file: string
  source: string
}

export async function carryPackComponentFile(pack: string, component: string, file: string): Promise<void> {
  await ensurePackExists(pack)

  const depot = await findPack(pack)

  await ensurePackHasComponent(depot, pack, component)
  await ensureThemeComponentsFolderPresent()

  const fileMove: FileMove = {
    dest: await getThemeComponentFilePath(component, file),
    file,
    source: await getLocalPackComponentFilePath(pack, component, file),
  }

  await copyFiles([fileMove])
}

export async function carryPackComponent(pack: string, component: string): Promise<void> {
  await ensurePackExists(pack)

  const depot = await findPack(pack)
  await ensurePackHasComponent(depot, pack, component)
  await ensureThemeComponentsFolderPresent()

  await copyPackComponent(depot, pack, component)
  await executeComponentCarry(pack, component)
}

export async function carryPack(pack: string): Promise<void> {
  await ensurePackExists(pack)
  await ensureThemeComponentsFolderPresent()

  const depot = await findPack(pack)
  const components = await getPackComponentNames(depot, pack)

  await Promise.all(
    components.map(async (component: string) =>
      Promise.all([copyPackComponent(depot, pack, component), executeComponentCarry(pack, component)]),
    ),
  )
}

export async function getPackComponents(depot: Depot, pack: string) {
  const depotPath = await getDepotPath(depot)
  const packPath = joinPath(depotPath, pack)
  return glob(`${packPath}/*`, {deep: 1, onlyDirectories: true})
}

export async function getPackComponentNames(depot: Depot, pack: string) {
  const componentPaths = await getPackComponents(depot, pack)
  return componentPaths.map((path) => basename(path))
}

export async function getPackComponentFiles(depot: Depot, pack: string, component: string): Promise<string[]> {
  const depotPath = await getDepotPath(depot)
  const packPath = joinPath(depotPath, pack, component)
  const componentFiles = await glob(`${packPath}/*`, {
    ignore: ['*.md', '**/carry.json'],
  })
  return componentFiles
}

export async function getLocalDepotPath(): Promise<string> {
  const localPorterPath = await findPathUp(LOCAL_PORTER_DIRECTORY, {type: 'directory'})

  if (!localPorterPath) {
    throw new AbortError(
      outputContent`Cannot find ${LOCAL_PORTER_DIRECTORY} directory when searching up from ${outputToken.path(cwd())}.`,
    )
  }

  return localPorterPath
}

export async function getGlobalDepotPath(): Promise<string> {
  return ''
}

export async function getLocalPackPaths(): Promise<string[]> {
  const localDepotPath = await getLocalDepotPath()
  return glob(`${localDepotPath}/*`, {deep: 1, onlyDirectories: true})
}

export async function getLocalPackNames(): Promise<string[]> {
  const packs = await getLocalPackPaths()
  return packs.map((path) => basename(path))
}

export async function getLocalPackComponentPath(pack: string, component: string) {
  const localDepotPath = await getLocalDepotPath()
  return joinPath(localDepotPath, pack, component)
}

export async function getLocalPackComponentFilePath(pack: string, component: string, file: string) {
  const localDepotPath = await getLocalDepotPath()
  return joinPath(localDepotPath, pack, component, file)
}

export async function getDepotPath(depot: Depot) {
  switch (depot) {
    case Depot.Local: {
      return getLocalDepotPath()
    }

    case Depot.Global: {
      return getGlobalDepotPath()
    }

    default: {
      return ''
    }
  }
}

export async function findPack(pack: string): Promise<Depot> {
  // look in project .porter directory, called a depot
  const localPacks = await getLocalPackNames()
  const inLocalDepot = localPacks.includes(pack)

  if (inLocalDepot) {
    return Depot.Local
  }

  return Depot.NotFound
}

export async function depotHasPack(pack: string): Promise<boolean> {
  const searchResult = await findPack(pack)
  return searchResult !== Depot.NotFound
}

export async function hasPackComponent(depot: Depot, pack: string, component: string) {
  const depotPath = await getDepotPath(depot)
  const componentPath = joinPath(depotPath, pack, component)
  return fileExists(componentPath)
}

export async function hasPackComponentFile(depot: Depot, pack: string, component: string, file: string) {
  const depotPath = await getDepotPath(depot)
  const filePath = joinPath(depotPath, pack, component, file)
  return fileExists(filePath)
}

export async function copyFiles(moves: FileMove[]) {
  await Promise.all(moves.map(async (move) => copyFile(move.source, move.dest)))
}

export async function getProjectPath() {
  const depotPath = await getLocalDepotPath()
  const projectRootPath = resolvePath(depotPath, '..')
  return projectRootPath
}

export async function getThemePath(): Promise<string> {
  const projectPath = await getProjectPath()
  return joinPath(projectPath, 'theme')
}

export async function getThemeComponentsPath(): Promise<string> {
  const themePath = await getThemePath()
  return joinPath(themePath, 'components')
}

export async function getThemeComponentPath(component: string): Promise<string> {
  const themeComponentPackPath = await getThemeComponentsPath()
  return joinPath(themeComponentPackPath, component)
}

export async function getThemeComponentFilePath(component: string, file: string): Promise<string> {
  const themeComponentPackPath = await getThemeComponentPath(component)
  return joinPath(themeComponentPackPath, file)
}

export async function ensurePackExists(pack: string) {
  const hasPack = await depotHasPack(pack)
  if (!hasPack) {
    const localDepotPath = await getLocalDepotPath()
    throw new AbortError(outputContent`Cannot find ${pack} in ${localDepotPath}.`)
  }
}

export async function ensurePackHasComponent(depot: Depot, pack: string, component: string) {
  const hasComponent = await hasPackComponent(depot, pack, component)
  if (!hasComponent) {
    const localPackComponentPath = await getLocalPackComponentPath(pack, component)
    throw new AbortError(outputContent`Cannot find ${component} in ${localPackComponentPath}.`)
  }
}

export async function ensureThemeComponentsFolderPresent(): Promise<void> {
  const themeComponentsPath = await getThemeComponentsPath()
  const exists = fileExists(themeComponentsPath)

  if (!exists) {
    throw new AbortError(outputContent`Cannot find ${themeComponentsPath} directory.`)
  }
}

export async function copyPackComponent(depot: Depot, pack: string, component: string) {
  const componentFiles = await getPackComponentFiles(depot, pack, component)

  // copy files in component folder to theme component folder
  const moves = await Promise.all(
    componentFiles.map(async (filePath) => ({
      dest: await getThemeComponentFilePath(component, basename(filePath)),
      file: basename(filePath),
      source: filePath,
    })),
  )
  await copyFiles(moves)
}

export async function executeComponentCarry(pack: string, component: string) {
  const carryFilePath = await getLocalPackComponentFilePath(pack, component, CARRY_FILE)
  const carryOperations = await loadCarryFile(carryFilePath)
  executeCarryFile(carryOperations)
}

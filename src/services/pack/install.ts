import {fileExists, mkdir, removeFile} from '@shopify/cli-kit/node/fs'
import {downloadGitRepository} from '@shopify/cli-kit/node/git'
import {cwd} from '@shopify/cli-kit/node/path'

import {GIT_FOLDER, LOCAL_PORTER_DIRECTORY, PROTOCOL_HTTPS} from '../../utilities/constants.js'
import {getLocalDepotPath} from '../../utilities/pack.js'

export async function install(repo: string, global: boolean, protocol: string): Promise<void> {
  await createLocalPackFolderIfMissing()
  const localPorterDirectory = await getLocalDepotPath()
  const pack = getPackNameFromRepo(repo)
  const localPackDirectory = `${localPorterDirectory}/${pack}`

  await downloadGitRepository({
    destination: localPackDirectory,
    repoUrl: githubUrl(protocol, repo),
    shallow: true,
  })

  if (!global) {
    await removeFile(`${localPackDirectory}/${GIT_FOLDER}`)
  }
}

function getPackNameFromRepo(repo: string): string {
  return repo.split('/')[1]
}

async function createLocalPackFolderIfMissing(): Promise<void> {
  const packFolderExists = await fileExists(`${cwd()}/${LOCAL_PORTER_DIRECTORY}`)

  if (!packFolderExists) {
    await mkdir(`${cwd()}/${LOCAL_PORTER_DIRECTORY}`)
  }
}

function githubUrl(protocol: string, repo: string): string {
  if (protocol === PROTOCOL_HTTPS) {
    return `https://github.com/${repo}`
  }

  return `git@github.com:${repo}`
}

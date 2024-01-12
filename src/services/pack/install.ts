import {fileExists, findPathUp, mkdir, removeFile} from '@shopify/cli-kit/node/fs'
import {downloadGitRepository} from '@shopify/cli-kit/node/git'
import {cwd} from '@shopify/cli-kit/node/path'

export async function installPack(repo: string, global: boolean) {
  await createLocalPackFolderIfMissing()
  const localPorterDirectory = await getLocalPorterDirectory()
  console.log(localPorterDirectory)
  const pack = getPackNameFromRepo(repo)
  const localPackDirectory = `${localPorterDirectory}/${pack}`

  await downloadGitRepository({
    destination: localPackDirectory,
    repoUrl: githubUrl(repo),
    shallow: true,
  })

  if (!global) {
    await removeFile(`${localPackDirectory}/.git`)
  }
}

function getPackNameFromRepo(repo: string): string {
  return repo.split('/')[1]
}

async function createLocalPackFolderIfMissing() {
  const packFolderExists = await fileExists(`${cwd()}/.porter`)

  if (!packFolderExists) {
    await mkdir(`${cwd()}/.porter`)
  }
}

function githubUrl(repo: string) {
  return `https://github.com/${repo}`
}

async function getLocalPorterDirectory() {
  return findPathUp('.porter', {type: 'directory'})
}

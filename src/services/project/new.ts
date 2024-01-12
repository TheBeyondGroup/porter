import {removeFile} from '@shopify/cli-kit/node/fs'
import {downloadGitRepository} from '@shopify/cli-kit/node/git'
import {cwd, joinPath} from '@shopify/cli-kit/node/path'

import {GIT_FOLDER, PROTOCOL_SSH} from '../../utilities/constants.js'
import {githubUrl} from '../../utilities/github.js'

export async function newProject(name: string) {
  const projectPath = joinPath(cwd(), name)

  await downloadGitRepository({
    destination: projectPath,
    repoUrl: githubUrl(PROTOCOL_SSH, 'TheBeyondGroup/porter-template'),
    shallow: true,
  })

  await removeFile(joinPath(projectPath, GIT_FOLDER))
}

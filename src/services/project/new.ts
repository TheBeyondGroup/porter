import { mkdir, findPathUp } from "@shopify/cli-kit/node/fs"

export async function newProject(name: string) {
  await mkdir(name)

  const projectRoot = await findPathUp(name, { type: "directory" })
  await mkdir(`${projectRoot}/.github`)
  // Add GitHub Actions workflows to support 

  await mkdir(`${projectRoot}/.vscode`)
  // Add recommended plugins
  // liquid syntax highlighting
  // theme check

  // Add editorconfig

  const shopkeeperRoot = `${projectRoot}/.shopkeeper`
  await mkdir(shopkeeperRoot)

  const bucketPath = `${shopkeeperRoot}/production`
  await mkdir(bucketPath)
  await mkdir(`${bucketPath}/config`)
  await mkdir(`${bucketPath}/templates`)
  await mkdir(`${bucketPath}/sections`)
  // add .env.sample
  // add .env

  const themePath = `${projectRoot}/theme`
  await mkdir(themePath)
  await mkdir(`${themePath}/assets`)
  await mkdir(`${themePath}/config`)
  await mkdir(`${themePath}/locales`)
  await mkdir(`${themePath}/sections`)
  await mkdir(`${themePath}/snippets`)
  await mkdir(`${themePath}/templates`)

  // create .gitignore
  // add theme-check.yml
  // add prettier config
  //  tailwind
  //  liquid
  // add linter config
  // package.json
  //

  // instantiate build system
  // run build system install
}

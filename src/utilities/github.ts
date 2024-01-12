import {PROTOCOL_HTTPS} from './constants.js'

export function githubUrl(protocol: string, repo: string): string {
  if (protocol === PROTOCOL_HTTPS) {
    return `https://github.com/${repo}`
  }

  return `git@github.com:${repo}`
}

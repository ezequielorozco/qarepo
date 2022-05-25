import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git'

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
}

const git: SimpleGit = simpleGit(options)

/**
 * Handles publishing the created Git tags
 */
;(async function publishGitTags() {
  git.pushTags('origin')
})()

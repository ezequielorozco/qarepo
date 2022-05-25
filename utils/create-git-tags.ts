import fs from 'fs'
import path from 'path'
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git'

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
}

const git: SimpleGit = simpleGit(options)

const allPackageJSONsMap = [
  parsePath('../ccl-documentation/package.json'),
  parsePath('../packages/brand-library/package.json'),
  parsePath('../packages/core-component-library/package.json'),
  parsePath('../packages/core-component-library-react/package.json'),
  parsePath('../packages/core-component-library-angular/dist/package.json'),
  parsePath('../packages/core-component-library-vue/package.json'),
]

/**
 * Parses and returns the path to the given package.json
 *
 * @param {string} packageJSONPath
 * @returns {string}
 */
function parsePath(packageJSONPath: string) {
  return path.join(__dirname, packageJSONPath)
}

/**
 * Handles creating Git tags for all @enreach/ packages
 */
;(async function createGitTags() {
  allPackageJSONsMap.map(packagePath => {
    const packageJSON = fs.readFileSync(packagePath, {
      encoding: 'utf8',
      flag: 'r',
    })

    const name = /"name": "@enreach\/(.+)"/g.exec(packageJSON)?.[1] ?? ''
    const version = /"version": "(\d+\.\d+\.\d+)"/g.exec(packageJSON)?.[1] ?? ''

    const gitTag = `@enreach/${name}@${version}`

    git.tag([gitTag], error => {
      if (error) {
        throw new Error(`Failed while creating tag: ${gitTag}`)
      }

      console.log(`Created tag: ${gitTag}`)
    })
  })
})()

import fs from 'fs'
import pathFn from 'path'

/**
 * Handles fetching and returning the version of the given package.json
 *
 * @param {string} packageJSONPath
 * @returns {string}
 */
export function getPackageVersion(packageJSONPath: string): string {
  const packageJSON = fs.readFileSync(packageJSONPath, {
    encoding: 'utf8',
    flag: 'r',
  })

  return /"version": "(\d+\.\d+\.\d+)"/g.exec(packageJSON)?.[1] ?? ''
}

/**
 * Handles replacing the @enreach/core-component-library package version with the given version
 *
 * @param {string} packageJSON
 * @param {string} version
 * @returns {string}
 */
export function syncCCLVersion(packageJSON: string, version: string): string {
  return packageJSON.replaceAll(
    /"@enreach\/core-component-library": "\^\d+\.\d+\.\d+"/g,
    `"@enreach/core-component-library": "^${version}"`
  )
}

/**
 * Handles matching the version of the given package.json with the version of the
 * @enreach/core-component-library package.
 *
 * @param {string} packageJSONPath Path to the package.json
 * @returns {void}
 */
export function syncPackageVersions(packageJSONPath: string): void {
  const packageJSON = fs.readFileSync(packageJSONPath, { encoding: 'utf8', flag: 'r' })

  const cclVersion = getPackageVersion(pathFn.join(__dirname, '../packages/core-component-library/package.json'))

  fs.rmSync(packageJSONPath, { force: true })

  fs.writeFileSync(
    packageJSONPath,
    syncCCLVersion(packageJSON, cclVersion).replaceAll(/"version": "\d+\.\d+\.\d+"/g, `"version": "${cclVersion}"`)
  )
}

/**
 * Handles copying and formatting the CHANGELOG.md file from the `@enreach/core-component-library` package
 * to the given <changelogPath>.
 *
 * @param {string} changelogPath
 * @param {string} packageType
 * @returns {void}
 */
export function copyMainChangelog(changelogPath: string, packageType: string): void {
  const packageChangelogPath = pathFn.join(__dirname, `../packages/core-component-library/CHANGELOG.md`)

  const changelog = fs.readFileSync(packageChangelogPath, { encoding: 'utf8', flag: 'r' })

  fs.rmSync(changelogPath, { force: true })

  fs.writeFileSync(
    changelogPath,
    changelog
      .replaceAll(`/@enreach/core-component-library@`, `/@enreach/core-component-library-${packageType}@`)
      .replaceAll(`@enreach/core-component-library@`, `@enreach/core-component-library-${packageType}@`)
  )
}

/**
 * Handles pointing the to the correct `types` file within the `<component>.d.ts` files,
 * which for some reason is going wrong within the components that are exported with `dist-custom-elements`.
 *
 * import type { Components, JSX } from "../types/interface"; -->
 * import type { Components, JSX } from "../types/components";
 */
export function formatExportedComponents(componentsDir: string) {
  fs.readdirSync(componentsDir).forEach((path: string) => {
    // Only update the path to the `types` file, if the file has extension `.d.ts`
    if (path.includes('.d.ts')) {
      const fullPath = `${componentsDir}/${path}`

      const data = fs.readFileSync(fullPath, { encoding: 'utf8', flag: 'r' })

      fs.rmSync(fullPath, { force: true })

      fs.writeFileSync(fullPath, data.replace('../types/interface', '../types/components'))
    }
  })
}

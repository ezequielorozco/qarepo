import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target'
import autoprefixer from 'autoprefixer'

const angularValueAccessors: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cl-text-field'],
    event: 'change',
    targetAttr: 'value',
    type: 'text',
  },
]

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['cl-text-field'],
    event: 'v-on-changed',
    targetAttr: 'value',
    // Optional:
    externalEvent: 'on-changed',
  },
]

export const config: Config = {
  namespace: 'core-component-library',
  enableCache: false,
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@enreach/core-component-library',
      directivesProxyFile:
        '../core-component-library-angular/projects/core-component-library-angular/src/lib/stencil-generated/components.ts',
      valueAccessorConfigs: angularValueAccessors,
      customElementsDir: 'dist/components',
      includeImportCustomElements: true,
    }),
    reactOutputTarget({
      componentCorePackage: '@enreach/core-component-library',
      proxiesFile: '../core-component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@enreach/core-component-library',
      proxiesFile: '../core-component-library-vue/src/components.ts',
      componentModels: vueComponentModels,
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    {
      type: 'dist',
      // Copying the css file from src/global to the dist/collection/global
      copy: [{ src: 'global', dest: 'global' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    {
      type: 'docs-readme',
      footer: 'Built with love',
      strict: true,
    },
  ],
}

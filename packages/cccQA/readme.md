# @enreach/core-component-library

This is the project for creating Web Components for the Enreach Design System Snowflake Library

## Getting Started

Install and run:

```bash
yarn

yarn start
```

Build for production, run:

```bash
yarn build
```

Unit tests for the components, run:

```bash
yarn test
```

# Before coding

Before writing a component, please read about [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). That is the methodoligy for structuring the commit messages and PR's in this library. Here is a a short example:

```
feat(optional): Summary in present tense
^--^^--------^
|       |
|       +-> Name of the component that is changed/created
|
+---------> Type: chore, docs, feat, fix, refactor, style, or test
```

There is a VSCode extention collection included in this project so you can install the recommended tools.

## Generating Components

To generate a new component blueprint, run:

```bash
yarn generate
```

Then select:

```bash
component
```

Write the [component name](##-Naming-Components) that has to be aligned with the designed name:

```bash
cl-modal
```

## Naming Components

Naming a component should be aligned with the designs. To prevent conflict with normal html tags, custom components needs to have two names with dash inbetween, where the first part has to be this prefix `cl-`, which stands for component library. A slider should for example be written as `cl-slider`.

## Writing Components

### File structure:

1. Imports
2. Component decorator
3. Props, state and etc
4. Method, listeners, events etc
5. Private methods
6. Lifecycle methods
7. Render method

### File import order:

1. External imports
2. Imports from project utils
3. Relative imports

Props in the render function is required to be alphabetically ordered. One can use VScode addons for that. It's also required to add comments for all the properties, methods and internal states. Naming of properties has to be abstract and not connected to any context. Handler names need to start with `on`, e.g. `onChange`, `onClick`, `onDrop` and etc.
Render function should contain as little logic as possible. Create other functions and excecute it in the render method for conditional rendering. Those methods can be private methods so you can see above for the order.

### Coding standards:

- In render functions, unpack all used variables as constants on top. Only use `this.xxx` to set an internal variable.
- When binding functions to HTML elements, use arrow key functions `onClick={(name: string) => this.setName(name)}`. Dont use bind: `onClick={this.setName(name).bind(this)}`. (A part of ES6)
- Use [ES6](https://github.com/lukehoban/es6features) features

To know more about the available [stencil API](https://stenciljs.com/docs/decorators) you can read the documentation.

## Writing Styles

No magic numbers are allowed. Fixed sizes should be multiplication or division of the sizes provided by the design tokens. For nested elements use [BEM](https://css-tricks.com/bem-101/) naming method.

## Writing Tests

Stencil comes with Jest and Puppetter for unit and e2e testing. It's expected that you cover 100% of the components and utils you add to this project. The documentation can be found [here](https://stenciljs.com/docs/testing-overview)

# Building components

In order to build and parse the components, run:

`yarn build`

> Please make sure, when you have added a new component, to import and add it to the `declarations`- and `exports` array in [public-api.ts](../core-component-library-angular/projects/core-component-library-angular/src/public-api.ts) inside the `core-component-library-angular` package.

# Using components

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@enreach/core-component-library@0.0.1/dist/core-component-library.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install @enreach/core-component-library --save`
- Put a script tag similar to this `<script src='node_modules/@enreach/core-component-library/dist/core-component-library.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a React / Angular / Vue app

- Run `npm install @enreach/core-component-library --save`
- Add an import to the npm packages `import @enreach/core-component-library;`
- Then you can use the element anywhere in your template, JSX, html etc

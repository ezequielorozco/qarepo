import { action as storybookAction } from '@storybook/addon-actions'

export const StorybookParam = {
  actions: { argTypesRegex: '^on.*' },
  controls: { hideNoControlsWarning: true, expanded: true },
}

/**
 * Returns an `action` function based on the given actionName, that Storybook can use for tracking
 * dispatched actions
 *
 * @param {string} actionName
 * @returns {function (event: Event) {}}
 */
export function action(actionName) {
  return function (event) {
    storybookAction(actionName)(event.nativeEvent)
  }
}

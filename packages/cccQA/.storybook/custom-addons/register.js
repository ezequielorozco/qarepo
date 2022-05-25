import { addons, types } from '@storybook/addons'

import ThemePanelAddon from './theme-panel-addon'

// Register the new custom Themes addon to the Storybook addons
addons.register('my/custom-addons', () => {
  addons.add('custom-addons/panel', {
    title: 'Themes',
    type: types.PANEL,
    render: ThemePanelAddon,
  })
})

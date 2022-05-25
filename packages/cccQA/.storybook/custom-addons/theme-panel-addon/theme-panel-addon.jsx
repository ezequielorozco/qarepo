import React, { useEffect } from 'react'
import { useAddonState, useParameter, useStorybookState } from '@storybook/api'
import { AddonPanel } from '@storybook/components'

import './theme-panel-addon.css'

/**
 * Functon that returns a theme addon panel for Storybook
 * @param {Object<{ active: boolean, key: number }>}
 * @returns {HTMLElement}
 */
function ThemePanelAddon({ active, key }) {
  const [selected, setSelected] = useAddonState('my/custom-addons', 'neutral')
  const { storyId } = useStorybookState()
  const themes = useParameter('themes', [])

  /**
   * Function that dispatches the setTheme event to the document, which can be caught by the Storybook preview
   * @param {Event} e
   * @returns {void}
   */
  function dispatchSetThemeEvent(e) {
    window.document.dispatchEvent(new CustomEvent('setTheme', { bubbles: true, detail: e.target.value || selected }))
  }

  /**
   * Function that dispatches the setTheme event to the document, which can be caught by the Storybook preview
   * and sets the selected theme on the state
   * @param {Event} e
   * @returns {void}
   */
  function handleSetTheme(e) {
    dispatchSetThemeEvent(e)
    setSelected(e.target.value)
  }

  // UseEffect that is only executed when the selected theme or storyId change
  useEffect(() => {
    // Add an eventlistener to the document to listen for the storybookDidMount event,
    // which is being dispatched when the Storybook preview is mounted
    window.document.addEventListener('storybookDidMount', dispatchSetThemeEvent)

    return () => {
      // Remove the eventlistener from the document to stop listening for storybookDidMount events,
      // which are being dispatched when the Storybook preview is mounted
      window.document.removeEventListener('storybookDidMount', dispatchSetThemeEvent)
    }
  }, [selected, storyId])

  return (
    <AddonPanel active={active} key={key}>
      <div className='addonPanel'>
        <form>
          {themes.map((value, key) => (
            <label className='formLabel' key={key}>
              <span>{value}</span>
              <input
                name='themes'
                type='radio'
                checked={value === selected}
                onChange={handleSetTheme}
                value={value}
              ></input>
            </label>
          ))}
        </form>
      </div>
    </AddonPanel>
  )
}

export default ThemePanelAddon

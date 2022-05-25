import { Component, h, Host, Prop, State, Watch } from '@stencil/core'

import { numToRem } from '../../utils/helpers'
import { updateStyles } from '../../utils/utils'

@Component({
  tag: 'cl-icon',
  styleUrl: 'cl-icon.scss',
  scoped: true,
})
export class ClIcon {
  // ViewBox of the SVG which MUST be set
  @State() viewBox: string = '0 0 24 24'

  /**
   * Object containing the CSS variables used for styling the component
   */
  @State() styles: { [key: string]: string } = {}

  /**
   * Screenreader label
   */
  @Prop() readonly ariaLabel: string = ''

  /**
   * FillColor of the icon
   */
  @Prop() readonly fillColor: string = ''

  /**
   * Name of the icon, is used to lookup icon in sprite sheet
   */
  @Prop() readonly name: string = ''

  /**
   * Determines the size of the icon component in REM
   */
  @Prop() readonly size?: number = null

  /**
   * Validates the fillColor property and updates the styles accordingly
   * @param {string} fillColor The updated fillColor value
   * @returns {void}
   */
  @Watch('fillColor')
  handleFillColor(fillColor: string): void {
    const cssVar = '--icon-color'

    switch (true) {
      // If the fillColor attribute is removed or the value of it is removed
      case [null, undefined].includes(fillColor):
        this.styles = updateStyles(this.styles, cssVar)
        break
      default:
        this.styles = updateStyles(this.styles, cssVar, fillColor)
        break
    }
  }

  /**
   * Validates the size property and updates the styles accordingly
   * @param {number} size The updated size value
   * @returns {void}
   */
  @Watch('size')
  handleSize(size: number): void {
    const cssVar = '--icon-size'

    switch (true) {
      // If the size attribute is removed or the value of it is removed
      case [null, undefined].includes(size):
        this.styles = updateStyles(this.styles, cssVar)
        break
      // If the size attribute is a number
      case !Number.isNaN(+size):
        this.styles = updateStyles(this.styles, cssVar, numToRem(size))
        break
      default:
        throw new Error(`Invalid value for property 'size'.`)
    }
  }

  componentWillLoad() {
    this.handleSize(this.size)
    this.handleFillColor(this.fillColor)

    const symbolElement = document.getElementById(this.name)
    const symbolViewBox = symbolElement && symbolElement.attributes.getNamedItem('viewport')?.nodeValue

    if (symbolViewBox) this.viewBox = symbolViewBox
  }

  render() {
    const { ariaLabel, name } = this

    return (
      <Host ariaLabel={ariaLabel} style={this.styles}>
        <slot>
          <svg viewBox={this.viewBox}>
            <use href={`#${name}`} />
          </svg>
        </slot>
      </Host>
    )
  }
}

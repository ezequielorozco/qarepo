import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import cl from 'clsx'

import { numToRem } from '../../utils/helpers'
import { updateStyles } from '../../utils/utils'

@Component({
  tag: 'cl-scroll-wrapper',
  styleUrl: 'cl-scroll-wrapper.scss',
  scoped: true,
})
export class ClScrollWrapper {
  /**
   * Object containing the CSS variables used for styling the component
   */
  @State() styles: { [key: string]: string } = {}

  /**
   * Determines the max height of the scroll-wrapper component
   */
  @Prop() readonly maxHeight?: number = null

  /**
   * Validates the maxHeight property and updates the styles accordingly
   * @param {number} maxHeight The updated maxHeight value
   * @returns {void}
   */
  @Watch('maxHeight')
  handleMaxHeight(maxHeight: number): void {
    const cssVar = '--wrapper-max-height'

    switch (true) {
      // If the maxHeight attribute is removed or the value of it is removed
      case [null, undefined].includes(maxHeight):
        this.styles = updateStyles(this.styles, cssVar)
        break
      // If the maxHeight attribute is a number
      case !Number.isNaN(+maxHeight):
        this.styles = updateStyles(this.styles, cssVar, numToRem(maxHeight))
        break
      default:
        throw new Error(`Invalid value for property 'maxHeight'.`)
    }
  }

  /**
   * Determines whether the scroll-bar should be persistent
   */
  @Prop() readonly persistent: boolean = false

  /**
   * Determines whether only the thumb should be shown, or also its background
   */
  @Prop() readonly thumbOnly: boolean = false

  /**
   * Size of the thumb
   */
  @Prop() readonly small: boolean = false

  connectedCallback() {
    this.handleMaxHeight(this.maxHeight)
  }

  render() {
    const { persistent, thumbOnly, small } = this

    return (
      <Host
        class={cl('scroll-wrapper', {
          'scroll-wrapper--small': small,
          'scroll-wrapper--show-track': !thumbOnly,
          'scroll-wrapper--persistent': persistent,
        })}
        style={this.styles}
      >
        <slot></slot>
      </Host>
    )
  }
}

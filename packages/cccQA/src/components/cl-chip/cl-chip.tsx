import { Component, h, Listen, Prop, Event, Element, EventEmitter } from '@stencil/core'
import cl from 'clsx'

@Component({
  tag: 'cl-chip',
  styleUrl: 'cl-chip.scss',
  scoped: true,
})
export class ClChip {
  /**
   * Is used to keep track of whether the chip element is being clicked or not
   */
  private clickState: boolean = false

  /**
   * The HTMLElement of this webcomponent
   */
  @Element() private element: HTMLClChipElement

  /**
   * Number that the chip displays. If the value is `null`, then no number is displayed
   */
  @Prop() readonly counter: number = null

  /**
   * Determines whether the disabled styling is applied or not
   */
  @Prop() readonly disabled: boolean = false

  /**
   * Determines whether the icon is displayed on the left or on the right
   */
  @Prop() readonly iconLeft: boolean = false

  /**
   * Name of the icon used in the button
   */
  @Prop() readonly iconName?: string = ''

  /**
   * Determines whether the chip has selected styling or not
   */
  @Prop({ mutable: true, reflect: true }) selected: boolean = false

  /**
   * Determines whether the chip is read-only or not
   */
  @Prop() readonly readOnly: boolean = false

  /**
   * Determines whether the chip has a small of regular size
   */
  @Prop() readonly small: boolean = false

  /**
   * Gets emitted on a click on the chip. An object that contains the properties 'id' and 'selected' is emitted.
   * The latter indicates the new 'selected' value after the click event on the chip element.
   */
  @Event() clicked: EventEmitter<{ id: string; selected: boolean }>

  /**
   * Gets emitted on a click on the icon in the chip. An object that contains the properties 'id' and 'selected' is
   * emitted. The latter indicates the new 'selected' value after the click event on the chip element.
   */
  @Event() iconClicked: EventEmitter<{ id: string; selected: boolean }>

  /**
   * Sets this.clickState to `true`
   * @returns {void}
   */
  @Listen('mousedown', { capture: true })
  handleMouseDown(): void {
    this.clickState = true
  }

  /**
   * Sets this.clickState to `false`
   * @returns {void}
   */
  @Listen('mouseup', { capture: true })
  @Listen('mouseout', { capture: true })
  handleMouseOut(): void {
    this.clickState = false
  }

  /**
   * Removes focus styling if the focus is caused by a mouse click.
   * @returns {void}
   */
  @Listen('focus', { capture: true })
  handleFocus(): void {
    if (this.clickState) {
      this.element.blur()
    }
  }

  /**
   * Changes the 'selectedState' state and emits a 'clicked' or 'iconClicked' event
   * @returns {Event} The event caused by the click
   */
  @Listen('click', { capture: true })
  handleClick(event: Event): void {
    if (this.disabled || this.readOnly) {
      return
    }

    const isIcon = element => {
      return element.classList && element.classList.contains('chip__icon')
    }

    this.selected = !this.selected

    if (event.composedPath().some(isIcon)) {
      this.iconClicked.emit({ id: this.element.id, selected: this.selected })
    } else {
      this.clicked.emit({ id: this.element.id, selected: this.selected })
    }
  }

  /**
   * Returns an icon component
   * @returns {HTMLClIconElement|void}
   */
  private getIconComponent = (): HTMLClIconElement | void => {
    if (!this.iconName) {
      return
    }

    return (
      <cl-icon
        class={cl('chip__icon', { 'chip__icon--left': this.iconLeft })}
        name={this.iconName}
        size={this.small ? 2 : 2.5}
      ></cl-icon>
    )
  }

  render() {
    const { counter, disabled, iconLeft, selected, small, readOnly } = this

    const attributes = {
      disabled,
    }

    return (
      <button
        class={cl('chip', {
          'chip--selected': selected,
          'chip--small': small,
          'chip--read-only': readOnly,
        })}
        {...attributes}
      >
        {iconLeft && this.getIconComponent()}
        <slot></slot>
        {typeof counter === 'number' && counter >= 0 && ` (${counter})`}
        {!iconLeft && this.getIconComponent()}
      </button>
    )
  }
}

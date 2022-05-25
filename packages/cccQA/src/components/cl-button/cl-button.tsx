import { Component, h, Host, Prop, Watch } from '@stencil/core'
import cl from 'clsx'

@Component({
  tag: 'cl-button',
  styleUrl: 'cl-button.scss',
  scoped: true,
})
export class ClButton {
  /**
   * Determines whether the disabled styling and behaviour is applied or not.
   */
  @Prop() readonly disabled: boolean = false

  /**
   * Name of the icon used in the button.
   * If not set no icon wil be displayed.
   */
  @Prop() readonly iconName?: string = ''

  /**
   * The 'name' attribute of the 'input' element
   */
  @Prop({ reflect: true }) readonly name: string = ''

  /**
   * Specifies whether the selected styling should be applied.
   */
  @Prop() readonly selected: boolean = false

  /**
   * Determines whether the small styling is applied or not.
   */
  @Prop() readonly small: boolean = false

  /**
   * Determines whether the processing styling is applied or not.
   */
  @Prop() readonly processing: boolean = false

  /**
   * Determines whether the error styling is applied or not.
   */
  @Prop() readonly error: boolean = false

  /**
   * Specifies the value of the type attribute the underlying button component should have.
   */
  @Prop() readonly type: 'button' | 'submit' | 'reset' = 'button'

  /**
   * Specifies the styling of the button.
   */
  @Prop() readonly variant: 'primary' | 'secondary' | 'tertiary' | 'text' = 'primary'

  /**
   * Validate if the disabled state is allowed with the current state
   * @returns void
   */
  @Watch('disabled')
  @Watch('processing')
  @Watch('error')
  handleValidation(): void {
    if ((this.processing || this.error) && this.disabled) {
      throw new Error(
        `button validation FAILED: Processing and Error buttons are not allowed to be disabled. See documentation.`
      )
    }
  }

  /**
   * When the component first connects to the DOM, do validation
   * @returns {void}
   */
  connectedCallback(): void {
    this.handleValidation()
  }

  render() {
    const { disabled, error, iconName, name, processing, selected, small, type, variant } = this

    return (
      <Host>
        <button
          disabled={disabled}
          type={type}
          name={name}
          class={cl(`button button--${variant}`, {
            'button--processing': processing,
            'button--error': error,
            'button--selected': selected,
            'button--disabled': disabled,
            'button--small': small,
          })}
        >
          {iconName && <cl-icon class='icon' name={iconName} size={3}></cl-icon>}
          <p class='body-1'>
            <slot></slot>
          </p>
        </button>
      </Host>
    )
  }
}

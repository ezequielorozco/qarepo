import { StorybookParam } from '../../constants'

export default {
  title: 'Button',
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'text', 'action'] },
      defaultValue: 'primary',
      name: 'Variant',
    },
    state: {
      control: { type: 'select', options: ['default', 'error', 'processing'] },
      defaultValue: 'default',
      name: 'State',
    },
    processing: {
      control: { type: 'boolean' },
      defaultValue: false,
      name: 'Processing',
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
      name: 'Error',
    },
    small: {
      control: { type: 'boolean' },
      defaultValue: false,
      name: 'Small',
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Disabled',
    },
    selected: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Selected',
    },
    iconName: {
      defaultValue: 'action--checkmark',
      control: { type: 'text' },
      name: 'Icon name',
    },
    buttonText: {
      defaultValue: 'enabled',
      control: { type: 'text' },
      name: 'Button text',
    },
    submit: {
      control: { type: 'boolean' },
      defaultValue: false,
      name: 'Submit',
    },
  },
}

const argType = {
  variant: {
    table: { type: { summary: 'primary, secondary, tertiary, text' }, defaultValue: { summary: 'primary' } },
    control: {
      type: null,
    },
  },
  processing: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  error: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  small: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  disabled: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  selected: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  iconName: {
    table: { type: { summary: 'string, null' }, defaultValue: { summary: 'null' } },
    control: {
      type: null,
    },
  },
  buttonText: { table: { disable: true } },
  submit: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
}

export const Default = () => (
  <>
    <cl-button>Primary</cl-button>
    <cl-button variant='secondary'>Secondary</cl-button>
    <cl-button variant='tertiary'>Tertiary</cl-button>
    <cl-button variant='text'>Text</cl-button>
  </>
)

Default.argTypes = argType
Default.parameters = StorybookParam

export const Sizes = () => (
  <>
    <cl-button>Large</cl-button>
    <cl-button small>Small</cl-button>
  </>
)

Sizes.argTypes = argType
Sizes.parameters = StorybookParam

export const Processing = () => (
  <>
    <cl-button processing>Primary</cl-button>
    <cl-button variant='secondary' processing>
      Secondary
    </cl-button>
    <cl-button variant='tertiary' processing>
      Tertiary
    </cl-button>
    <cl-button variant='text' processing>
      Text
    </cl-button>
  </>
)

Processing.argTypes = argType
Processing.parameters = StorybookParam

export const Error = () => (
  <>
    <cl-button error>Primary</cl-button>
    <cl-button variant='secondary' error>
      Secondary
    </cl-button>
    <cl-button variant='tertiary' error>
      Tertiary
    </cl-button>
    <cl-button variant='text' error>
      Text
    </cl-button>
  </>
)

Error.argTypes = argType
Error.parameters = StorybookParam

export const WithIcon = () => (
  <>
    <cl-button icon-name='action--star--outline'>Primary</cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline'>
      Secondary
    </cl-button>
    <cl-button variant='tertiary' icon-name='action--star--outline'>
      Tertiary
    </cl-button>
    <cl-button variant='text' icon-name='action--star--outline'>
      Text
    </cl-button>
  </>
)

WithIcon.argTypes = argType
WithIcon.parameters = StorybookParam

export const Selected = () => (
  <>
    <cl-button selected>Primary</cl-button>
    <cl-button variant='secondary' selected>
      Secondary
    </cl-button>
    <cl-button variant='tertiary' selected>
      Tertiary
    </cl-button>
    <cl-button variant='text' selected>
      Text
    </cl-button>
  </>
)

Selected.argTypes = argType
Selected.parameters = StorybookParam

export const Disabled = () => (
  <>
    <cl-button disabled>Primary</cl-button>
    <cl-button variant='secondary' disabled>
      Secondary
    </cl-button>
    <cl-button variant='tertiary' disabled>
      Tertiary
    </cl-button>
    <cl-button variant='text' disabled>
      Text
    </cl-button>
  </>
)

Disabled.argTypes = argType
Disabled.parameters = StorybookParam

export const ActionButtons = () => (
  <>
    <h4>Primary</h4>
    <cl-button variant='primary' icon-name='action--star--outline' large></cl-button>
    <cl-button variant='primary' icon-name='action--star--outline' small></cl-button>
    <cl-button variant='primary' icon-name='action--star--outline' large disabled></cl-button>
    <cl-button variant='primary' icon-name='action--star--outline' small disabled></cl-button>
    <cl-button variant='primary' icon-name='action--star--outline' large selected></cl-button>
    <cl-button variant='primary' icon-name='action--star--outline' small selected></cl-button>

    <h4>Secondary</h4>
    <cl-button variant='secondary' icon-name='action--star--outline' large></cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline' small></cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline' large disabled></cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline' small disabled></cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline' large selected></cl-button>
    <cl-button variant='secondary' icon-name='action--star--outline' small selected></cl-button>

    <h4>Tertiary</h4>
    <cl-button variant='tertiary' icon-name='action--star--outline' large></cl-button>
    <cl-button variant='tertiary' icon-name='action--star--outline' large disabled></cl-button>
    <cl-button variant='tertiary' icon-name='action--star--outline' large selected></cl-button>
  </>
)

ActionButtons.argTypes = argType
ActionButtons.parameters = StorybookParam

export const Item = ({ variant, processing, error, small, disabled, selected, iconName, buttonText, submit }) => (
  <>
    <cl-button
      variant={variant}
      processing={processing}
      error={error}
      small={small}
      icon-name={iconName}
      disabled={disabled}
      selected={selected}
      submit={submit}
    >
      <p>{buttonText}</p>
    </cl-button>
  </>
)

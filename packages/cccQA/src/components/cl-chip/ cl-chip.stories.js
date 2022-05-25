import { StorybookParam } from '../../constants'

import { iconNames } from '../cl-icon/cl-icon_names'

export default {
  title: 'Chip',
  argTypes: {
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
    chipText: {
      defaultValue: 'enabled',
      control: { type: 'text' },
      name: 'Chip text',
    },
    counter: {
      defaultValue: null,
      control: { type: 'number' },
      name: 'Counter',
    },
    iconName: {
      control: { type: 'select', options: iconNames },
      defaultValue: 'action--close',
      name: 'Icon name',
    },
    iconLeft: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Icon left',
    },
    small: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Small',
    },
    readOnly: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Read only',
    },
  },
}

const argType = {
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
  chipText: { table: { disable: true } },
  counter: {
    table: { type: { summary: 'number' }, defaultValue: { summary: 'null' } },
    control: {
      type: null,
    },
  },
  iconName: {
    table: { type: { summary: 'string' }, defaultValue: { summary: 'null' } },
    control: {
      type: null,
    },
  },
  iconLeft: {
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
  readOnly: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
}

const css = `
    cl-chip + cl-chip {
      margin-top: 0.5rem;
    }
  `

export const Default = () => <cl-chip>Enabled</cl-chip>

Default.argTypes = argType
Default.parameters = StorybookParam

export const Sizes = () => (
  <>
    <style>{css}</style>
    <cl-chip>Regular</cl-chip>
    <cl-chip small>Small</cl-chip>
  </>
)

Sizes.argTypes = argType
Sizes.parameters = StorybookParam

export const WithIcon = () => (
  <>
    <style>{css}</style>
    <cl-chip icon-name='action--close'>Right Icon</cl-chip>
    <cl-chip icon-name='action--close' icon-left>
      Left Icon
    </cl-chip>
  </>
)

WithIcon.argTypes = argType
WithIcon.parameters = StorybookParam

export const Counter = () => (
  <>
    <style>{css}</style>
    <cl-chip counter='100'>Counter</cl-chip>
    <cl-chip small counter='55'>
      Small Counter
    </cl-chip>
  </>
)

Counter.argTypes = argType
Counter.parameters = StorybookParam

export const Selected = () => (
  <>
    <style>{css}</style>
    <cl-chip selected>Selected</cl-chip>
    <cl-chip small selected>
      Small Selected
    </cl-chip>
  </>
)

Selected.argTypes = argType
Selected.parameters = StorybookParam

export const Readonly = () => (
  <>
    <style>{css}</style>
    <cl-chip read-only>Readonly</cl-chip>
    <cl-chip small read-only>
      Small Readonly
    </cl-chip>
  </>
)

Readonly.argTypes = argType
Readonly.parameters = StorybookParam

export const Disabled = () => (
  <>
    <style>{css}</style>
    <cl-chip disabled>Disabled</cl-chip>
    <cl-chip small disabled>
      Small Disabled
    </cl-chip>
  </>
)

Disabled.argTypes = argType
Disabled.parameters = StorybookParam

export const Item = ({ disabled, selected, chipText, counter, iconName, iconLeft, small, readOnly }) => (
  <cl-chip
    counter={counter}
    icon-left={iconLeft}
    small={small}
    icon-name={iconName}
    disabled={disabled}
    selected={selected}
    read-only={readOnly}
  >
    <p>{chipText}</p>
  </cl-chip>
)

import { StorybookParam } from '../../constants'

import { fillColours } from './cl-icon_fill_colours'
import { iconNames } from './cl-icon_names'

export default {
  title: 'Icon',
  argTypes: {
    selectbox: {
      control: { type: 'select', options: iconNames },
      defaultValue: 'action--favourite--filled',
      name: 'Icon',
    },
    color: {
      control: { type: 'select', options: fillColours },
      defaultValue: '--color-neutral-main',
      name: 'Fill color',
    },
    ariaLabel: {
      defaultValue: '',
      control: { type: 'text' },
      name: 'Aria label',
    },
    size: {
      defaultValue: 3,
      control: { type: 'number' },
      name: 'Size',
    },
  },
}

const argType = {
  selectbox: {
    table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
    control: {
      type: null,
    },
  },
  color: {
    table: { type: { summary: 'string' }, defaultValue: { summary: 'currentColor' } },
    control: {
      type: null,
    },
  },
  ariaLabel: {
    table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
    control: {
      type: null,
    },
  },
  size: {
    table: { type: { summary: 'number' }, defaultValue: { summary: 'null' } },
    control: {
      type: null,
    },
  },
}

const createIconString = (
  <>
    <h6 style={{ fontSize: 'var(--size-spacong-2)', margin: '0' }}>There are {iconNames.length} icons</h6>
    <ul style={{ display: 'flex', flexFlow: 'row wrap', listStyle: 'none' }}>
      {iconNames.map(element => (
        <li
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: '0 1 20%',
            padding: '0 var(--size-spacing-half) var(--size-spacing-2)',
          }}
        >
          <cl-icon name={element} style={{ marginRight: 'var(--size-spacing-1)' }}></cl-icon>
          <p
            style={{
              fontSize: 'calc(var(--size-spacing-2) - var(--size-spacing-quarter))',
              color: 'var(--color-neutral-600)',
            }}
          >
            {element}
          </p>
        </li>
      ))}
    </ul>
  </>
)

export const All = () => <div>{createIconString}</div>

All.argTypes = argType
All.parameters = StorybookParam

export const Item = ({ selectbox, color, ariaLabel, size }) => (
  <cl-icon name={selectbox} fill-color={`var(${color})`} aria-label={ariaLabel} size={size}></cl-icon>
)

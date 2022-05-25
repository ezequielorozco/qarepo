import { StorybookParam } from '../../constants'

export default {
  title: 'Scroll Wrapper',
  argTypes: {
    getMaxHeight: {
      defaultValue: 20,
      control: { type: 'number' },
      name: 'Max height',
    },
    getThumbOnly: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Thumb only',
    },
    getPersistentScrollBar: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Persistent scrollbar',
    },
    getSmall: {
      defaultValue: false,
      control: { type: 'boolean' },
      name: 'Small thumb',
    },
    contenteditableCount: {
      defaultValue: 5,
      control: { type: 'number' },
      name: 'Lorem Ipsum count',
    },
    maxWidth: {
      defaultValue: 50,
      control: { type: 'number' },
      name: 'Max width',
    },
    maxHeight: {
      defaultValue: 50,
      control: { type: 'number' },
      name: 'Max height',
    },
  },
}

const argType = {
  getMaxHeight: {
    table: { type: { summary: 'number' }, defaultValue: { summary: 'null' } },
    control: {
      type: null,
    },
  },
  getThumbOnly: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  getPersistentScrollBar: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  getSmall: {
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    control: {
      type: null,
    },
  },
  contenteditableCount: { table: { disable: true } },
  maxWidth: { table: { disable: true } },
  maxHeight: { table: { disable: true } },
}

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet dolor odio. Nunc ac ornare nunc, ac tempor lectus. Aliquam id dolor massa. Aenean nec sodales purus. Cras eget ornare nulla. Morbi lobortis vitae quam eu vulputate. Suspendisse vestibulum, tortor consequat rhoncus venenatis, felis augue bibendum augue, non ullamcorper neque enim eget sapien. Duis cursus sem in libero interdum, sit amet eleifend orci convallis. Pellentesque id massa sagittis, condimentum augue ut, tempus urna. Etiam tristique non neque quis posuere. Nam bibendum sapien at tristique faucibus. Maecenas semper, ex viverra consectetur sagittis, ligula neque ultricies elit, nec porta ligula sem et erat. Nulla felis lorem, elementum nec odio et, posuere ullamcorper arcu.'

const createTextString = count => (
  <p style={{ margin: 'var(--size-spacing-half) 0' }}>{Array.from(Array(count), () => loremIpsum).join('')}</p>
)

const styles = `
  {
    font-family: var(--font-ui);
  }

  h2, h4 {
    margin: var(--size-spacing-2);
  }

  .preview-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: var(--size-spacing-1);
    overflow: hidden;
  }

  cl-scroll-wrapper.sc-cl-scroll-wrapper-h {
    --wrapper-margin: 0 var(--size-spacing-quarter) 0 var(--size-spacing-1);
  }

  cl-icon {
    color: var(--color-primary-main);
    margin: var(--size-spacing-2);
  }
`

export const Default = ({ contenteditableCount }) => (
  <>
    <style>{styles}</style>
    <div className='preview-wrapper'>
      <cl-scroll-wrapper max-height='20'>
        <span
          className='textarea'
          role='textbox'
          contentEditable
          suppressContentEditableWarning={true}
          style={{ display: 'block', width: '100%', border: 'none', outline: 'none' }}
        >
          {createTextString(contenteditableCount)}
        </span>
      </cl-scroll-wrapper>
    </div>
  </>
)

Default.argTypes = argType
Default.parameters = StorybookParam

export const Horizontal = ({ maxWidth, maxHeight }) => (
  <>
    <style>
      {`
  cl-scroll-wrapper.sc-cl-scroll-wrapper-h {
    --wrapper-max-width: calc(${maxWidth}rem / 2);
  `}
    </style>
    <cl-scroll-wrapper max-height={`${maxHeight}rem`}>
      <cl-pictogram name='other--cookies' size='100'></cl-pictogram>
    </cl-scroll-wrapper>
  </>
)

Horizontal.argTypes = {
  getMaxHeight: { table: { disable: true } },
  getThumbOnly: { table: { disable: true } },
  getPersistentScrollBar: { table: { disable: true } },
  getSmall: { table: { disable: true } },
  contenteditableCount: { table: { disable: true } },
}

export const Item = ({ getMaxHeight, getThumbOnly, getPersistentScrollBar, getSmall, contenteditableCount }) => (
  <>
    <style>{styles}</style>
    <div className='preview-wrapper'>
      <cl-scroll-wrapper
        max-height={getMaxHeight}
        persistent={getPersistentScrollBar}
        thumb-only={getThumbOnly}
        small={getSmall}
      >
        <span
          className='textarea'
          role='textbox'
          contentEditable
          suppressContentEditableWarning={true}
          style={{ display: 'block', width: '100%', border: 'none', outline: 'none' }}
        >
          {createTextString(contenteditableCount)}
        </span>
      </cl-scroll-wrapper>
    </div>
  </>
)

Item.argTypes = {
  maxWidth: { table: { disable: true } },
  maxHeight: { table: { disable: true } },
}

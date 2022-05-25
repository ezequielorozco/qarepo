import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { ClChip } from './cl-chip'

describe('cl-chip', () => {
  let page: SpecPage
  const getNewSpecPage = (html: string): Promise<SpecPage> => newSpecPage({ components: [ClChip], html })

  const isElementChip = (element: HTMLElement): element is HTMLClChipElement =>
    'nodeName' in element && element.nodeName === 'CL-CHIP'

  const getChipElementFromPage = (): HTMLClChipElement => {
    const element = page.doc.querySelector('cl-chip')
    if (!isElementChip(element)) {
      if (element === null) {
        throw new TypeError('"element" is expected to be HTMLClChipElement but instead is null')
      } else {
        throw new TypeError('"element" is expected to be HTMLClChipElement')
      }
    }
    return element
  }

  it('- should build', async () => {
    page = await getNewSpecPage(`<cl-chip></cl-chip>`)
    expect(page).toBeTruthy()
  })

  describe('Properties: ', () => {
    const counter = 100
    const disabled = false
    const iconName = 'action--close'
    const iconLeft = false
    const selected = false
    const small = false

    it('- should render component with `counter` property', async () => {
      page = await getNewSpecPage(`<cl-chip counter="${counter}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('counter')
    })

    it('- should render component with `disabled` property', async () => {
      page = await getNewSpecPage(`<cl-chip disabled="${disabled}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('disabled')
    })

    it('- should render component with `icon-name` property', async () => {
      page = await getNewSpecPage(`<cl-chip icon-name="${iconName}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('iconName')
    })

    it('- should render component with `icon-left` property', async () => {
      page = await getNewSpecPage(`<cl-chip icon-left="${iconLeft}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('iconLeft')
    })

    it('- should render component with `selected` property', async () => {
      page = await getNewSpecPage(`<cl-chip selected="${selected}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('selected')
    })

    it('- should render component with `small` property', async () => {
      page = await getNewSpecPage(`<cl-chip small="${small}"></cl-chip>`)
      const element = getChipElementFromPage()
      expect(element).toHaveProperty('small')
    })
  })
})

import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { ClIcon } from './cl-icon'

import { executeSynchronously } from '../../utils/helpers'

const sizesToRender = [1, 2, 4, 8, 16, 24, 100]

describe('cl-icon', () => {
  let page: SpecPage

  const getNewSpecPage = (html: string): Promise<SpecPage> => newSpecPage({ components: [ClIcon], html })

  const isElementIcon = (element: HTMLElement): element is HTMLClIconElement =>
    'nodeName' in element && element.nodeName === 'CL-ICON'

  const getIconElementFromPage = (): HTMLClIconElement => {
    const element = page.doc.querySelector('cl-icon')
    if (!isElementIcon(element)) {
      if (element === null) {
        throw new TypeError('"element" is expected to be HTMLClIconElement but instead is null')
      } else {
        throw new TypeError('"element" is expected to be HTMLClIconElement')
      }
    }
    return element
  }

  it('- should build', async () => {
    page = await getNewSpecPage(`<cl-icon name='communication--device--pc'></cl-icon>`)
    expect(page).toBeTruthy()
  })

  describe('Properties: ', () => {
    const ariaLabel = 'String'
    const fillColor = 'var(--color-primary-main)'
    const name = 'communication--device--pc'

    it('- should render component with `aria-label` property', async () => {
      page = await getNewSpecPage(`<cl-icon aria-label="${ariaLabel}" name="${name}"></cl-icon>`)
      const element = getIconElementFromPage()
      expect(element).toHaveProperty('ariaLabel')
    })

    it('- should render component with `fill-color` property', async () => {
      page = await getNewSpecPage(`<cl-icon fill-color="${fillColor}" name="${name}"></cl-icon>`)
      const element = getIconElementFromPage()
      expect(element).toHaveProperty('fillColor')
    })

    it('- should render component with `size` property', async () => {
      page = await getNewSpecPage(`<cl-icon size="3" name="${name}"></cl-icon>`)
      const element = getIconElementFromPage()
      expect(element).toHaveProperty('size')
    })

    it('- renders the given `size` correctly', () =>
      executeSynchronously(
        sizesToRender.map(size => [
          async () => {
            page = await getNewSpecPage(`<cl-icon size="${size}" name="${name}"></cl-icon>`)

            expect(page.root).toEqualHtml(`
          <cl-icon arialabel="" name="communication--device--pc" size="${size}" style="--icon-size: calc(${size} * var(--size-spacing-1));">
            <slot-fb>
              <svg viewBox="0 0 24 24">
                <use href="#communication--device--pc"></use>
              </svg>
            </slot-fb>
          </cl-icon>
        `)
          },
          `Size: ${size}`,
        ])
      ))
  })
})

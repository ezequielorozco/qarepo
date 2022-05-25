import { newE2EPage } from '@stencil/core/testing'

describe('cl-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<cl-icon></cl-icon>')

    const element = await page.find('cl-icon')
    expect(element).toHaveClass('hydrated')
  })
})

import { newE2EPage } from '@stencil/core/testing'

describe('scroll-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<cl-scroll-wrapper></cl-scroll-wrapper>')

    const element = await page.find('cl-scroll-wrapper')
    expect(element).toHaveClass('hydrated')
  })
})

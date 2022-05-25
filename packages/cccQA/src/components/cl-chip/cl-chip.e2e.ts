import { newE2EPage } from '@stencil/core/testing'

describe('cl-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<cl-chip></cl-chip>')

    const element = await page.find('cl-chip')
    expect(element).toHaveClass('hydrated')
  })
})

import { newSpecPage } from '@stencil/core/testing'
import { ClScrollWrapper } from './cl-scroll-wrapper'

describe('cl-scroll-wrapper', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [ClScrollWrapper],
      html: `<cl-scroll-wrapper><p>hello</p></cl-scroll-wrapper>`,
    })
    expect(page.root).toEqualHtml(`
      <cl-scroll-wrapper class="scroll-wrapper scroll-wrapper--show-track"><p>hello</p></cl-scroll-wrapper>
    `)
  })
})

/**
 * @param element element to search for shadow DOM
 */
export const hasShadowDom = (element: HTMLElement): boolean => !!element.shadowRoot && !!element.attachShadow

/**
 *
 * @param name name of hidden input field
 * @param value value of hidden input field
 * @param container container to add input field to
 * @param ignoreHasShadowDom should method ignore existance of shadow DOM, if ignored input field is always added
 * @param isDisabled disabled state of input field
 */
export const renderHiddenInputField = (
  name: string,
  id: string,
  value: string | undefined | null,
  container: HTMLElement,
  ignoreHasShadowDom: boolean,
  isDisabled: boolean
): void => {
  if (hasShadowDom(container) || ignoreHasShadowDom) {
    let inputField: HTMLInputElement | null = container.querySelector('input.hidden-input')
    if (!inputField) {
      inputField = container.ownerDocument.createElement('input')
      inputField.type = 'hidden'
      inputField.classList.add('hidden-input')
      container.appendChild(inputField)
    }
    inputField.disabled = isDisabled
    inputField.name = name
    inputField.id = id
    inputField.value = value || ''
  }
}

/**
 * Transforms the input RGBA color string to HEX
 * @param colorCode string
 * @returns string
 */
export function RGBToHexForCSS(colorCode: string): string {
  if (colorCode.includes('#')) return colorCode

  const separator = colorCode.indexOf(',') > -1 ? ',' : ' '

  const rgba = colorCode.substr(5).split(')')[0].split(separator)

  let r = (+rgba[0]).toString(16)
  let g = (+rgba[1]).toString(16)
  let b = (+rgba[2]).toString(16)

  if (r.length === 1) r = `0${r}`
  if (g.length === 1) g = `0${g}`
  if (b.length === 1) b = `0${b}`

  return `#${r}${g}${b}`.toUpperCase()
}

/**
 * Transforms HSL color array to RGB color array
 * @param hsl [number, number, number]
 * @returns [number, number, number]
 */
export function HSLToRGB(hsl: [number, number, number]): [number, number, number] {
  const chroma = (1 - Math.abs(2 * hsl[2] - 1)) * hsl[1]
  const x = chroma * (1 - Math.abs(((hsl[0] / 60) % 2) - 1))
  const lightness = hsl[2] - chroma / 2
  let r = 0
  let g = 0
  let b = 0

  if (hsl[0] >= 0 && (hsl[0] < 60 || hsl[0] === 360)) {
    r = chroma
    g = x
    b = 0
  } else if (hsl[0] >= 60 && hsl[0] < 120) {
    r = x
    g = chroma
    b = 0
  } else if (hsl[0] >= 120 && hsl[0] < 180) {
    r = 0
    g = chroma
    b = x
  } else if (hsl[0] >= 180 && hsl[0] < 240) {
    r = 0
    g = x
    b = chroma
  } else if (hsl[0] >= 240 && hsl[0] < 300) {
    r = x
    g = 0
    b = chroma
  } else if (hsl[0] >= 300 && hsl[0] < 360) {
    r = chroma
    g = 0
    b = x
  }

  r = Math.round((r + lightness) * 255)
  g = Math.round((g + lightness) * 255)
  b = Math.round((b + lightness) * 255)

  return [r, g, b]
}

/**
 * Transforms RGB color array to Hex color string
 * @param rgb [number, number, number]
 * @returns string
 */
export function RGBToHex(rgb: [number, number, number]): string {
  return `#${rgb
    .map(hexPart => {
      const hex = hexPart.toString(16).toLocaleUpperCase()
      return hex.length === 1 ? `0${hex}` : hex
    })
    .join('')}`
}

/**
 * Transforms RGB color array to HSL color array
 * @param rgb [number, number, number]
 * @returns [number, number, number]
 */
export function RGBToHSL(rgb: [number, number, number]): [number, number, number] {
  const cmin = Math.min(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
  const cmax = Math.max(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
  const delta = cmax - cmin
  let hue = 0
  let s = 0
  let l = 0

  if (delta === 0) hue = 0
  else if (cmax === rgb[0] / 255) hue = ((rgb[1] / 255 - rgb[2] / 255) / delta) % 6
  else if (cmax === rgb[1] / 255) hue = (rgb[2] / 255 - rgb[0] / 255) / delta + 2
  else hue = (rgb[0] / 255 - rgb[1] / 255) / delta + 4

  hue = Math.round(hue * 60)
  if (hue < 0) hue += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  return [hue, s, l]
}

/**
 * Transforms Hex string to RGB color array
 * @param hex string
 * @returns [number, number, number]
 */
export function HexToRGB(hex: string): [number, number, number] {
  let RXHexSplit: RegExp

  if (hex.match(/^#? *(([a-f\d]){3})$/i)) {
    RXHexSplit = /^#? *([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i
  } else if (hex.match(/^#? *(([a-f\d]){6})$/i)) {
    RXHexSplit = /^#? *([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  }

  const rgb = RXHexSplit.exec(hex)
    .slice(-3)
    .map((value: string) => parseInt(value, 16))

  return [rgb[0], rgb[1], rgb[2]]
}

/**
 * Return a promise which resolves in x amounts of miliseconds.
 * @param duration Duration of the delay in miliseconds (Defaults to 0)
 */
export function delayAsync(duration: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, duration))
}

/**
 * Handles executing a test with a try/catch block
 * @param {function} asyncTestFn Async function
 * @param {string} testIdentifier Identifier that clearifies which component/variant is being tested
 * @returns {Promise<void>}
 */
export async function asyncTest(asyncTestFn: () => void, testIdentifier?: string): Promise<void> {
  try {
    await asyncTestFn()
  } catch (error) {
    if (testIdentifier) error.message = `${testIdentifier.toUpperCase()}: ${error.message}`
    throw error
  }
}

/**
 * Executes all the promises in the given array synchronously
 * @param {Array<[(any?) => unknown, string?]>} asyncFunctionsArray Array of promises
 * @returns {Promise<void>}
 */
export async function executeSynchronously(asyncFunctionsArray: Array<[(any?) => unknown, string?]>): Promise<void> {
  for (const [asyncFn, id] of asyncFunctionsArray) {
    await asyncTest(asyncFn, id)
  }
}

/**
 * Returns a CSS value to calculate the REM equivalent of the given number
 * @param {number|string} value Number or string to calculate the REM value for
 * @returns {string}
 */
export function numToRem(value: number | string): string {
  return `calc(${value} * var(--size-spacing-1))`
}

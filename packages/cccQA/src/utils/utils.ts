export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

/**
 * Handles updating the CSS styles object with the given value
 * @param {[key: string]: string} styles Styles object
 * @param {string} varName Name of the CSS variable
 * @param {string|number} value Value that should be set for the given CSS variable name
 * @returns {[key: string]: string}
 */
export function updateStyles(
  styles: { [key: string]: string },
  varName: string,
  value?: string | number
): { [key: string]: string } {
  const stylesCopy = { ...styles }

  if (!value) {
    delete stylesCopy[varName]
  } else {
    stylesCopy[varName] = `${value}`
  }

  return stylesCopy
}

/**
 * Handles debouncing the given function for an x amount of milliseconds
 * @param {Function} func Function that will be debounced
 * @param {number} wait Number of milliseconds to wait before executing the function
 * @param {boolean} immediate Boolean indicating if the function should also be invoked once at the beginning
 * @returns {Function}
 */
export function debounce(func: () => unknown, wait: number = 200, immediate: boolean = false): () => void {
  let timeout

  return (...args) => {
    if (immediate && !timeout) func.apply(this, args)

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null

      func.apply(this, args)
    }, wait)
  }
}

/**
 * Handles binding the given function
 * @param {Function} func Function to bind
 * @returns {Function}
 */
export function bind(func: (argument: unknown) => unknown): () => [] {
  return function bound(...args: []) {
    return func.apply(this, args)
  }.bind(this)
}

/**
 * Handles memoizing the given function based on the given dependencies
 * Usage example:
 *  private exampleFn = memoize(function() {
 *    return 'this is an example'
 *  },
 *  bind(() => [dependency1, dependency2, dependency 3, dependency4])
 *  )
 * @param {Function} func Function whose return values will be memoized
 * @param {Function} dependencies Function that returns an array of dependencies
 * @returns {any}
 */
export function memoize(func: (any?) => any, dependencies?: () => []): (any?) => any {
  const cache = {}

  return function memoized(...args) {
    const key = JSON.stringify([dependencies ? dependencies() : [], args])

    if (!cache[key]) {
      cache[key] = func.apply(this, args)
      console.log('not cached')
    } else {
      console.log('cached')
    }

    return cache[key]
  }
}

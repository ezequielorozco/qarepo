/**
 * Determines if the currect device is a touch device
 * @returns {boolean}
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in document || navigator.maxTouchPoints > 0
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export default function (a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('multiplier must be number');
  }
  return a * b;
}

multiply('x', 'y');

export const magic_number = 42;

export default function (a, b) {
  return a + b;
}

export function multiply (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('multiplier must be number');
  }
  return a * b;
}

export const magic_number = 42;

/**
 * Adjacent letter keys on a staggered US QWERTY keyboard, in stable order.
 * Deliberately excludes punctuation, modifiers and the target key itself.
 */
export const QWERTY_LETTER_NEIGHBORS: Readonly<Record<string, readonly string[]>> = Object.freeze({
  q: ['w', 'a'], w: ['q', 'e', 'a', 's'], e: ['w', 'r', 's', 'd'],
  r: ['e', 't', 'd', 'f'], t: ['r', 'y', 'f', 'g'], y: ['t', 'u', 'g', 'h'],
  u: ['y', 'i', 'h', 'j'], i: ['u', 'o', 'j', 'k'], o: ['i', 'p', 'k', 'l'],
  p: ['o', 'l'], a: ['q', 'w', 's', 'z'], s: ['w', 'e', 'a', 'd', 'z', 'x'],
  d: ['e', 'r', 's', 'f', 'x', 'c'], f: ['r', 't', 'd', 'g', 'c', 'v'],
  g: ['t', 'y', 'f', 'h', 'v', 'b'], h: ['y', 'u', 'g', 'j', 'b', 'n'],
  j: ['u', 'i', 'h', 'k', 'n', 'm'], k: ['i', 'o', 'j', 'l', 'm'],
  l: ['o', 'p', 'k'], z: ['a', 's', 'x'], x: ['s', 'd', 'z', 'c'],
  c: ['d', 'f', 'x', 'v'], v: ['f', 'g', 'c', 'b'], b: ['g', 'h', 'v', 'n'],
  n: ['h', 'j', 'b', 'm'], m: ['j', 'k', 'n'],
});

export function getNeighborKeys(key: string): string[] {
  if (!/^[a-z]$/i.test(key)) return [];
  const neighbors = QWERTY_LETTER_NEIGHBORS[key.toLowerCase()];
  return neighbors.map(letter => key === key.toUpperCase() ? letter.toUpperCase() : letter);
}

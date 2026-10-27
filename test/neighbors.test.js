import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ANSI, getNeighborKeys } from '../dist/index.js';

test('letter adjacency is symmetric, case preserving and excludes self', () => {
  const letters = ANSI.flat().map(key => key.default).filter(key => /^[a-z]$/i.test(key));
  assert.equal(letters.length, 26);
  for (const key of letters) {
    const lower = key.toLowerCase();
    const neighbors = getNeighborKeys(lower);
    assert.ok(neighbors.length >= 2);
    assert.equal(new Set(neighbors).size, neighbors.length);
    assert.ok(!neighbors.includes(lower));
    assert.deepEqual(getNeighborKeys(lower.toUpperCase()), neighbors.map(x => x.toUpperCase()));
    for (const neighbor of neighbors) assert.ok(getNeighborKeys(neighbor).includes(lower));
  }
  assert.deepEqual(getNeighborKeys('q'), ['w', 'a']);
  for (const unsupported of ['', 'é', '1', ' ', 'ab', '🙂']) assert.deepEqual(getNeighborKeys(unsupported), []);
});

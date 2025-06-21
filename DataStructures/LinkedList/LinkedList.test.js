import LinkedList from './LinkedList.js';
import { test, expect, describe, beforeEach, afterEach, jest } from '@jest/globals';

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    list = new LinkedList([5, 2, 8]);
    console.log.mockClear();
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('creates head from first element', () => {
    expect(list.head.data).toBe(5);
  });

  test('add appends a node', () => {
    list.add(10);
    let curr = list.head;
    while (curr.next) {
      curr = curr.next;
    }
    expect(curr.data).toBe(10);
  });

  test('print logs correct sequence', () => {
    list.print();
    expect(console.log.mock.calls).toEqual([
      [' -> 5'],
      [' -> 2'],
      [' -> 8'],
    ]);
  });
});


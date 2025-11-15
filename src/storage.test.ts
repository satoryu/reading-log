import { describe, it, expect, beforeEach } from "vitest";

import { load, save, clear } from "./storage";

describe('storage', () => {
  beforeEach(() => {
    clear('test-key')
  })

  it('saveする前にloadしたときはfallbackが返る', () => {
    expect(load('test-key', [1, 2, 3])).toEqual([1, 2, 3])
  })
  it('saveした値がloadで返る', () => {
    save('test-key', [4, 5, 6])
    expect(load('test-key', [1, 2, 3])).toEqual([4, 5, 6])
  })
  it('loadした値を操作してもsaveした内容に影響を与えない', () => {
    save('test-key', [1, 2, 3])
    const array = load('test-key', [])
    expect(load('test-key', [])).toEqual([1, 2, 3])

    array.push(4)
    expect(load('test-key', [])).toEqual([1, 2, 3])
    save('test-key', array)
    expect(load('test-key', [])).toEqual([1, 2, 3, 4])
  })
})

import { describe, it, expect, beforeEach } from 'vitest'
import type { Book } from '../types'
import { isISO } from '../test/utils'

import { addBook, listBooks, clearBooks } from './bookRepository'

beforeEach(() => {
  clearBooks()
})

describe('addBook', () => {
  it('タイトルを受け取りBookを返す', () => {
    const book: Book = addBook('Clean Architecture')

    expect(book.title).toBe('Clean Architecture')
  })

  it('createdAt, updatedAt は同一の値になっている', () => {
    const book = addBook('DDD')

    expect(isISO(book.createdAt)).toBe(true)
    expect(isISO(book.updatedAt)).toBe(true)
    expect(book.createdAt).toBe(book.updatedAt)
  })
})

describe('listBooks', () => {
  it('追加したBookが保存されlistBooksで取得できる', () => {
    addBook('Clean Architecture')

    const books: Book[] = listBooks()
    expect(books).toHaveLength(1)
  })

  it('updatedAt の降順で返す', async () => {
    addBook('A')
    await new Promise((r) => setTimeout(r, 5))
    addBook('B')

    const books = listBooks()
    const titles = books.map((b) => b.title)
    expect(titles).toEqual(['B', 'A'])
  })
})

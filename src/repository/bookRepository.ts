import type { Book, BookId } from '../types'
import { newId, toISODateString } from '../types'
import { load, save, clear } from '../storage'

const STORAGE_KEY = 'books'

export const clearBooks = (): void => {
  clear(STORAGE_KEY)
}

export const addBook = (title: string): Book => {
  const now = toISODateString(new Date())

  const book: Book = {
    id: newId<BookId>(),
    title,
    status: 'planned',
    createdAt: now,
    updatedAt: now,
  }

  const books = load<Book[]>(STORAGE_KEY, [])
  books.push(book)
  save(STORAGE_KEY, books)

  return book
}

export const listBooks = (): Book[] => {
  return load<Book[]>(STORAGE_KEY, []).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export const removeBook = (id: BookId): void => {
  save(
    STORAGE_KEY,
    listBooks().filter((b) => b.id !== id),
  )
}

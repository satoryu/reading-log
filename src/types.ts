import { v7 as uuidv7 } from 'uuid'

export type BookId = string & { __brand: 'BookId' }
export type NoteId = string & { __brand: 'NoteId' }
export type ReadingSessionId = string & { __brand: 'ReadingSessionId' }

type IdTypes = BookId | ReadingSessionId | NoteId

export const asId = <IdT extends IdTypes>(s: string): IdT => s as IdT
export const newId = <IdT extends IdTypes>(): IdT => uuidv7() as IdT

export type ISODateString = string & { __brand: 'ISODateString' }

export const toISODateString = (date: Date): ISODateString => date.toISOString() as ISODateString

export type BookStatus = 'planned' | 'reading' | 'completed'

export interface Book {
  id: string
  title: string
  totalPages?: number
  isbn13?: string
  status: BookStatus
  createdAt: ISODateString
  updatedAt: ISODateString
}

export interface ReadingSession {
  id: string
  bookId: string
  startedAt: ISODateString
  endedAt: ISODateString
}

export interface Note {
  id: string
  bookId: string
  page?: number
  content: string
  createdAt: ISODateString
  updatedAt: ISODateString
}

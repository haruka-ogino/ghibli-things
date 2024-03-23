import db from './connection.ts'
import { Film } from '../../models/ghibli.ts'

export async function getAllFilms(): Promise<Film[]> {
  return await db('films').select()
}

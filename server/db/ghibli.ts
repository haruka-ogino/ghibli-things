import db from './connection.ts'
import {
  Character,
  Dish,
  Film,
  CharacterData,
  CategoryWithFilm,
} from '../../models/ghibli.ts'

// film fns

export async function getAllFilms(): Promise<Film[]> {
  return await db('films').select()
}

export async function getFilmById(id: number): Promise<Film[]> {
  return await db('films').select().where('id', id).first()
}

export async function getDiffFilm(id: number): Promise<Film> {
  return await db('films').where('id', '!=', id).orderByRaw('RANDOM()').first()
}

// character fns

export async function getAllChars(): Promise<Character[]> {
  return await db('characters').select()
}

export async function addChar(newChar: CharacterData) {
  return await db('characters').insert(newChar)
}

export async function updateChar(id: number, updatedChar: CharacterData) {
  return await db('characters').where('id', id).update(updatedChar)
}

export async function deleteChar(id: number) {
  return await db('characters').where('id', id).del()
}

export async function getCharsWithFilms(): Promise<Character[]> {
  return await db('characters')
    .join('films', 'films.id', 'film_id')
    .select(
      'characters.id as id',
      'characters.name as name',
      'characters.description as description',
      'characters.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
}

export async function getTwoChars(): Promise<CategoryWithFilm[]> {
  // Fetch first random char
  const randomCharIds = await db('characters')
    .select('id', 'film_id')
    .orderByRaw('RANDOM()')
    .first()
  //?????
  if (!randomCharIds) {
    // Handle case where no characters are found
    return []
  }

  // Fetch another random char ID that is different from the first one
  const differentRandomCharIds = await db('characters')
    .select('id', 'film_id')
    .whereNot('film_id', randomCharIds.film_id) // Exclude the randomCharIds
    .orderByRaw('RANDOM()')
    .first()
  // ?????
  if (!differentRandomCharIds) {
    // Handle case where only one distinct film ID is found
    return []
  }

  // Fetch details of the two random characters
  const result = await db('characters')
    .whereIn('characters.id', [randomCharIds.id, differentRandomCharIds.id])
    .join('films', 'films.id', 'characters.film_id')
    .select(
      'characters.id as id',
      'characters.name as name',
      'characters.description as description',
      'characters.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
  return result
}

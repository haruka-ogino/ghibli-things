import request from 'superagent'
import {
  Film,
  Dish,
  Character,
  CharacterData,
  CategoryWithFilm,
  Category,
} from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function getFilms(): Promise<Film[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/films')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getFilm(id: number): Promise<Film | undefined> {
  try {
    const res = await request.get(rootUrl + `/films/${id}`)
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function differentFilm(id: number): Promise<Film | undefined> {
  try {
    const res = await request.get(rootUrl + `/films/diff-film/${id}`)
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getDishes(): Promise<Dish[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/dishes')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getChars(): Promise<Character[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/characters')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function addNewChar(data: CharacterData) {
  try {
    const res = await request
      .post(rootUrl + '/characters/new-character')
      .send(data)
    return res.body
  } catch (e) {
    console.error(e)
  }
}

// '/update-char/:id'
export async function editChar(data: Character) {
  try {
    const { id } = data
    const res = await request
      .patch(rootUrl + `/characters/update/${id}`)
      .send(data)
    // console.log('EditChar Response:', res.body)
    return res.body
  } catch (e) {
    console.error(e)
    throw new Error('Failed to update character')
  }
}

export async function charsWithFilms(): Promise<
  CategoryWithFilm[] | undefined
> {
  try {
    const res = await request.get(rootUrl + '/characters/with-films')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function deleteCharacter(
  id: number,
  name: string,
) /*: Promise<Character[] | undefined> */ {
  try {
    await request.delete(rootUrl + `/characters/delete/${id}`)
    alert(`${name} has been deleted`)
  } catch (e) {
    console.error(e)
  }
}

export async function dishesWithFilms(): Promise<CategoryWithFilm[] | void> {
  try {
    const res = await request.get(rootUrl + '/dishes/with-films')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function dishesDiffFilms() {
  try {
    const res = await request.get(rootUrl + '/two-dishes')

    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getPlaces(): Promise<Category[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/places')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

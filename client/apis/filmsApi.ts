import request from 'superagent'
import { Film, Dish, Character, CharacterData } from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function getFilms(): Promise<Film[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/films')
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
    const res = await request.post(rootUrl + '/new-character').send(data)
    return res.body
  } catch (e) {
    console.error(e)
  }
}

// '/update-char/:id'
export async function editChar(data: Character) {
  try {
    const { id } = data
    const res = await request.patch(rootUrl + `/update-char/${id}`).send(data)
    // console.log('EditChar Response:', res.body)
    return res.body
  } catch (e) {
    console.error(e)
    throw new Error('Failed to update character')
  }
}

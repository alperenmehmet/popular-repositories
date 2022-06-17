import {selectedField} from './selectedField'
import {BASE_URL, URL_PARAMETER} from '../constants/api'

export const getData = async (query) => {
  const result = await fetch(`${BASE_URL}${query}${URL_PARAMETER}`)
    .then((res) => res.json())
    .then((data) => selectedField(data.items))
  return result
}

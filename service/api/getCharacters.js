import { mapResponseData } from '../../utils/mapResponseData';

export const getCharacters = (limit, offset, { name = '' }) => {
  return fetch(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}&name=${name}`)
    .then(response => response.json())
    .then(mapResponseData)
}

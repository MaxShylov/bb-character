import { mapResponseData } from '../../utils/mapResponseData';

export const getCharacters = (limit, offset, { name = '' }) => {
  console.log('limit, offset', limit, offset);
  console.log('name', name);
  return fetch(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}&name=${name}`)
    .then(response => response.json())
    .then(mapResponseData)
}

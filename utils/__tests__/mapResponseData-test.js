import { mapResponseData } from '../mapResponseData';

const data = [{
  char_id: 1,
  img: 'qwe',
  name: 'name',
  occupation: 'qwe',
  status: 'died',
  nickname: 'nick',
  appearance: [1,2,3],
}]

const result = [{
  id: 1,
  image: 'qwe',
  name: 'name',
  occupation: 'qwe',
  status: 'died',
  nickname: 'nick',
  seasonAppearance: [1,2,3],
}]

it(`should be equal`, () => {
  expect(mapResponseData(data)).toEqual(result);
});

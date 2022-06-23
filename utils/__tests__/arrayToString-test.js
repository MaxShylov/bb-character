import { arrayToString } from '../arrayToString';

it(`should be a string`, () => {
  expect(typeof arrayToString([1,2,3])).toBe('string');
});

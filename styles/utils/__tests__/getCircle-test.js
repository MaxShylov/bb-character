import { getCircle } from '../getCircle';

it(`should be equal`, () => {
  expect(getCircle(100)).toEqual({
    width: 100,
    height: 100,
    borderRadius: 50,
  });
});

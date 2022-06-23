import { hasAtLeastOneElementInArray } from '../hasSameElementsInArray';

it(`should be true when first array is empty`, () => {
  expect(typeof hasAtLeastOneElementInArray([], [1,2])).toBeTruthy();
});

it(`should be true when second array is empty`, () => {
  expect(typeof hasAtLeastOneElementInArray([1,2,3], [])).toBeTruthy();
});

it(`should be true when at least one element has in array`, () => {
  expect(typeof hasAtLeastOneElementInArray([1,2,3], [1,5])).toBeTruthy();
});

it(`should be false when everyone element has not in array`, () => {
  expect(typeof hasAtLeastOneElementInArray([1,2,3], [4,5])).toBeTruthy();
});

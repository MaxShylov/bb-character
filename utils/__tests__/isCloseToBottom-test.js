import { isCloseToBottom } from '../isCloseToBottom';

const mockData = {
  layoutMeasurement: { height: 100 },
  contentOffset: { y: 100 },
  contentSize: { height: 150 },
}

it(`should be true when it in the bottom`, () => {
  expect(isCloseToBottom(mockData)).toBeTruthy();
});

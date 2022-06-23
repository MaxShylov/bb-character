import renderer from 'react-test-renderer';
import { Characters } from '../Characters';

test('renders correctly', () => {
  const tree = renderer.create(<Characters />).toJSON();

  expect(tree).toMatchSnapshot();
});

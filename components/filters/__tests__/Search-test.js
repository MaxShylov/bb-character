import renderer from 'react-test-renderer';
import { Search } from '../Search';

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();

  expect(tree).toMatchSnapshot();
});

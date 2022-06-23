import renderer from 'react-test-renderer';
import { FilterAppearance } from '../FilterAppearance';

test('renders correctly', () => {
  const tree = renderer.create(<FilterAppearance />).toJSON();

  expect(tree).toMatchSnapshot();
});

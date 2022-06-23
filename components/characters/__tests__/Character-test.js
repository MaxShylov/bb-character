import renderer from 'react-test-renderer';
import { Character } from '../Character';

test('renders correctly', () => {
  const tree = renderer.create(<Character />).toJSON();

  expect(tree).toMatchSnapshot();
});

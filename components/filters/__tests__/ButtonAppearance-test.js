import renderer from 'react-test-renderer';
import { ButtonAppearance } from '../ButtonAppearance';

test('renders correctly', () => {
  const tree = renderer.create(<ButtonAppearance />).toJSON();

  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';
import { CharacterDetails } from '../CharacterDetails';

test('renders correctly', () => {
  const tree = renderer.create(<CharacterDetails />).toJSON();

  expect(tree).toMatchSnapshot();
});

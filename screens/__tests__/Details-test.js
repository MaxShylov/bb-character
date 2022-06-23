import renderer from 'react-test-renderer';
import { Details } from '../Details';

test('renders correctly', () => {
  const tree = renderer.create(<Details />).toJSON();

  expect(tree).toMatchSnapshot();
});

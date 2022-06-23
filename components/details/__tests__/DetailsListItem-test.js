import renderer from 'react-test-renderer';
import { DetailsListItem } from '../DetailsListItem';

test('renders correctly', () => {
  const tree = renderer.create(<DetailsListItem />).toJSON();

  expect(tree).toMatchSnapshot();
});

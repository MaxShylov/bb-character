import { View } from 'react-native';
import { CharacterDetails } from '../components';
import { globalStyles } from '../styles/global-styles';

export const Details = ({ route }) => {
  return (
    <View style={globalStyles.container}>
      <CharacterDetails data={route?.params} />
    </View>
  );
}

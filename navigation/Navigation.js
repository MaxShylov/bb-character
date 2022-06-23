import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details } from '../screens';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.home}
          component={Home}
          options={{ title: 'Breaking Bad characters' }}
        />
        <Stack.Screen
          name={routes.details}
          component={Details}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

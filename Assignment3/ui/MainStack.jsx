import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../pages/profile/index.jsx';
import Gallery from '../pages/gallery/index.jsx';
import ImageView from '../pages/view/index.jsx';

export default function MainStack(props) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile" 
          component={ Profile }
          options={{
            title: '',
            headerTitleStyle: { display: 'none'}
          }}
        />
        <Stack.Screen name="Gallery" component={ Gallery } />
        <Stack.Screen name="View" component={ ImageView } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
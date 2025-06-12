import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { navigationRef } from '../utilites/utils';
import MenuBar from './MenuBar';
import EditKitteh from '../pages/edit-kitteh/index';
import Kittehs from '../pages/kittehs/index';
import KittehProfile from '../pages/profile/index';

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 20 }}>
      <MenuBar />
      <NavigationContainer ref={ navigationRef }>
        <Stack.Navigator initialRouteName="Kittehs">
          <Stack.Screen
            name="Profile"
            component={ KittehProfile }
            options={{
              title: 'Kitteh Profile',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="New Kitteh"
            component={ EditKitteh }
            options={{
              title: 'New Kitteh',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Kittehs"
            component={ Kittehs }
            // initialParams={ kittehs }
            options={{
              title: 'Kittehs',
              headerTitleStyle: { display: 'none' },
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
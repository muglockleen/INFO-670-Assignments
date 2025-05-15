import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { navigationRef } from '../utils/utils.js';
import MenuBar from './MenuBar.jsx';
import Profile from '../pages/profile/index.jsx';
import Gallery from '../pages/gallery/index.jsx';
import ImageView from '../pages/view/index.jsx';
import { getKittehWithId } from '../utils/utils.js';

export default function MainStack(props) {
  const Stack = createNativeStackNavigator();

  const [kittehs, setKittehs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO(MPM): Figure out how to use the local file system for load/save.
        const data = require('../data/db/cats.json');
        setKittehs(data.cats);
        setLoading(false);
      } catch (error) {
        console.error("Error reading JSON file (cats.json):", error);
      }
    };

    fetchData();
  }, []);

  const kittehId = 4; // Buddy Junior
  const kitteh = getKittehWithId(kittehs, kittehId);

  return (
    <>
      { loading ? (
        <></>
      ) : (
        <View style={{ flex: 20 }}>
          <MenuBar />
          <NavigationContainer ref={ navigationRef }>
            <Stack.Navigator initialRouteName="Profile">
              <Stack.Screen
                name="Profile" 
                component={ Profile }
                initialParams={ kitteh }
                options={{
                  title: 'Profile',
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Gallery"
                component={ Gallery }
                initialParams={ kitteh }
                options={{
                  title: 'Gallery',
                  headerTitleStyle: { display: 'none' },
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="View"
                component={ ImageView }
                options={{
                  title: 'Kitteh View',
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      )}
    </>
  );
}
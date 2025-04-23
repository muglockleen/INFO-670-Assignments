import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import TitleBar from './layouts/TitleBar';
import Controls from './layouts/Controls';
import Kittehs from './layouts/Kittehs';
import { mainStyles } from './assets/mpm-styles';
import { createNewIdFrom } from './utilites/utils';

export default function App() {
  const [kittehs, setKittehs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = require('./data/cats.json');
        setKittehs(data.cats);
      } catch (error) {
        console.error("Error reading JSON file:", error);
      }
    };

    fetchData();
  }, []);

  const addKitteh = (kitteh) => {
//    const fs = require('fs');
    kitteh.id = createNewIdFrom(kittehs);
    console.log(`Created new Kitteh Id: ${kitteh.id}`);
    setKittehs([...kittehs, kitteh]);
//    fs.writeFileSync('./data/cats.json', JSON.stringify({ cats: kittehs}));
  }

  return (
    <SafeAreaView style={ mainStyles.container }>
      <TitleBar />
      <Controls kittehWasAdded={ addKitteh } />
      <Kittehs kittehs={ kittehs } />
    </SafeAreaView>
  );
}

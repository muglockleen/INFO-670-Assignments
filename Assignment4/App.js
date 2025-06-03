import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import TitleBar from './layouts/TitleBar';
import Controls from './layouts/Controls';
import Kittehs from './layouts/Kittehs';
import { mainStyles } from './assets/mpm-styles';
import { getCatsFromRepository, addCatToRepository } from './apis/db';

export default function App() {
  const [kittehs, setKittehs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCatsFromRepository();
      setKittehs(data);
      console.log(`Kittehs size is ${kittehs.length}`);
      for (var item of kittehs) {
        console.log(`Kitteh ${item.name}`);
      }
    }) ();
  }, []);

  const addKitteh = (kitteh) => {
    // TODO(MPM): Either here or in API, validate the data and set defaults
    // for any parameters that need them. Maybe good to do this in the API
    // since the repository will have constraints, e.g., there are db table
    // fields that are NOT NULL. Let the API handle its rules.
    addCatToRepository(kitteh);
  }

  return (
    <SafeAreaView style={ mainStyles.container }>
      <TitleBar />
      <Controls kittehWasAdded={ addKitteh } />
      <Kittehs kittehs={ kittehs } />
    </SafeAreaView>
  );
}

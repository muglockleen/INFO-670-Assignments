import { Text, View, ScrollView, Alert } from "react-native";
import Kitteh from "../components/Kitteh";
import { listStyles } from '../assets/mpm-styles';
import { removeKitteh } from "../utilites/utils";
import React, { useState } from 'react';

export default function Kittehs({ kittehs }) {
  const [update, setUpdate] = useState(false);

  function onRemoveKitteh(kitteh) {
    confirmRemoval(kittehs, kitteh.name, kitteh.id, setUpdate, update);
  }

  return (
    <View style={ listStyles.container }>
      <ScrollView style={ listStyles.content }>
        <Text style={ listStyles.text }>Teh Rezident Kittehs!</Text>
        { kittehs.map((value, index) => (
          <Kitteh key={ index } kitteh={ value } removeKitteh={ onRemoveKitteh }></Kitteh>
          ))
        }
      </ScrollView>
    </View>
  );
}

function confirmRemoval( kittehs, name, id, setUpdate, update ) {
  Alert.alert(
    `Remove Kitteh from the List`,
    `Joo Reelly Wantz to Remuv ${name}?`,
    [
      {
        text: 'Yes',
        onPress: () => {
          removeKitteh(kittehs, id);
          setUpdate(!update);
        }
      },
      {
        text: "No",
        onPress: () => console.log("Kitteh Removal Canceled")
      },
    ],
    {
      cancelable: true,
    }
  );
};
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, TouchableHighlight } from "react-native";
import Kitteh from "../../components/Kitteh";
import { listStyles } from '../../assets/mpm-styles';
import { getCatsFromRepository, removeKitteh } from "../../apis/db";
import { navigate } from '../../utilites/utils';

export default function Kittehs() {
  const [update, setUpdate] = useState(false);
  const [kittehs, setKittehs] = useState([]);
  
  useEffect(() => {
    (async () => {
      const data = await getCatsFromRepository();
      setKittehs(data);
//      console.log(`Kittehs size is ${kittehs.length}`);
      for (var item of kittehs) {
//        console.log(`Kitteh ${item.name}`);
      }
    }) ();
  }, []);

  function onRemoveKitteh(kitteh) {
    confirmRemoval(kittehs, kitteh.name, kitteh.id, setUpdate, update);
  }

  const onKittehPress = (page, kitteh) => {
    navigate(page, kitteh);
  };

  try {
    return (
      <View style={ listStyles.container }>
      <ScrollView contentContainerStyle={ listStyles.content }>
        <Text style={ listStyles.text }>Teh Rezident Kittehs!</Text>
        { kittehs.map((value, index) => (
          <TouchableHighlight key={ index } onPress={ () => onKittehPress('Profile', value) }>
            <Kitteh key={ index } kitteh={ value } removeKitteh={ onRemoveKitteh }></Kitteh>
          </TouchableHighlight>
          ))
        }
      </ScrollView>
      </View>
    );
  } catch (error) {
    return (
      // <View>
      //   <Text>{ error.toString() }</Text>
      // </View>
      <></>
    );
  }
}

function confirmRemoval( kittehs, name, id, setUpdate, update ) {
  // TODO(MPM): The web view does not show the alert.
  removeKitteh(id);
  setUpdate(!update);

  // Alert.alert(
  //   `Remove Kitteh from the List`,
  //   `Joo Reelly Wantz to Remuv ${name}?`,
  //   [
  //     {
  //       text: 'Yes',
  //       onPress: () => {
  //         removeKitteh(id);
  //         setUpdate(!update);
  //       }
  //     },
  //     {
  //       text: "No",
  //       onPress: () => console.log("Kitteh Removal Canceled")
  //     },
  //   ],
  //   {
  //     cancelable: true,
  //   }
  // );
};
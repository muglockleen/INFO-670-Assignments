import { useState } from 'react';
import { Keyboard, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { controlStyles } from "../assets/mpm-styles";

export default function Controls({ kittehWasAdded }) {
  const defaultKitteh = { id: 0, name: '', summary: '' };
  const [kitteh, setKitteh] = useState(defaultKitteh)

  const nameWasChanged = (text) => {
    setKitteh({ ...kitteh, name: text });
  };
  const descriptionWasChanged = (text) => {
    setKitteh({ ...kitteh, summary: text });
  };

  const sendKittehData = () => {
    Keyboard.dismiss();
    setKitteh(defaultKitteh);
    kittehWasAdded(kitteh);
  };

  return (
    <View style={controlStyles.header}>
      <TouchableOpacity
        style={ kitteh.name === '' ? controlStyles.roundButtonDisabled : controlStyles.roundButton }
        disabled={ kitteh.name === '' ? true : false }
        onPress={ sendKittehData }>
        <Text style={ controlStyles.buttonText }>+</Text>
      </TouchableOpacity>
      <View>
        <Text style={ controlStyles.title }>Gotz A New Kitteh?</Text>
        <Text style={ controlStyles.text }>Name</Text>
        <TextInput
          style={ controlStyles.input }
          placeholder={ defaultKitteh.name }
          value={ kitteh.name }
          onChangeText={ nameWasChanged }></TextInput>
        <Text style={ controlStyles.text }>Brief Description (optional)</Text>
        <TextInput
          style={ controlStyles.input }
          placeholder={ defaultKitteh.summary }
          value={ kitteh.summary }
          onChangeText={ descriptionWasChanged }></TextInput>
      </View>
    </View>
  );
}

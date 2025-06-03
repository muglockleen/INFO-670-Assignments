import { useState } from 'react';
import { Keyboard, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
  const genderWasChanged = (id) => {
    setKitteh({ ...kitteh, genderId: id });
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
        <Text style={ controlStyles.text }>Gender</Text>
        <View style={ controlStyles.input }>
          <Picker selectedValue={ kitteh.name }
            onValueChange={ genderWasChanged }>
            {/* TODO(MPM): Cycle through available options pulled from the db. */}
            <Picker.Item label='Unknown' value='0' />
            <Picker.Item label='Female' value='1' />
            <Picker.Item label='Male' value='2' />
          </Picker>
        </View>
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

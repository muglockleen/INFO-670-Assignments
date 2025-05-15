import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { Checkbox } from 'react-native-paper';
import DateInput from '../../components/DateInput';
import { profileStyles, controlStyles, menuStyles } from "../../assets/mpm-styles";

export default function Profile() {
  const route = useRoute();
  const kitteh = route.params;

  const [tempKitteh, setTempKitteh] = useState(kitteh)

  let intro = 'Profile Page';
  if (kitteh && kitteh.name) {
    intro = `${kitteh.name}'s Profile`;
  }

  const summaryWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, summary: text });
  };
  const nameWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, name: text });
  };
  const bioWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, bio: text });
  };
  const genderWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, gender: text });
  };
  const colorWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, color: text });
  };
  const breedWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, breed: text });
  };
  const chipNumWasChanged = (text) => {
    const parsedValue = parseInt(text);
    if (!isNaN(parsedValue)) {
      setTempKitteh({ ...tempKitteh, microchipNumber: parsedValue });
    } else {
      setTempKitteh({ ...tempKitteh, microchipNumber: null });
    }
  };
  const ageWasChanged = (text) => {
    const parsedValue = parseInt(text);
    if (!isNaN(parsedValue)) {
      setTempKitteh({ ...tempKitteh, ageYears: parsedValue });
    } else {
      setTempKitteh({ ...tempKitteh, ageYears: null });
    }
  };
  const dateFoundWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, dateFound: text });
  };
  const rabiesVaxDateWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, rabiesVaxDate: text });
  };
  const comboVaxDateWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, comboVaxDate: text });
  };

  const saveKittehData = () => {
    Keyboard.dismiss();
    console.log(`Saving profile data for Kitteh: ${kitteh.name}`);
    // TODO(MPM): This should be the save to the db.
//    setKittehs([...kittehs, kitteh]);
  };

  return (
    <View style={ profileStyles.container }>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={ profileStyles.bioContainer }>
          <Text style={ profileStyles.title }>{ intro }</Text>
          <Text style={ profileStyles.labelText }>Summary</Text>
          <TextInput
           style={ [ controlStyles.input, { width: '100%' } ]}
           multiline={ true }
           defaultValue={ kitteh.summary }
           value={ tempKitteh.summary }
           onChangeText={ summaryWasChanged }>
          </TextInput>
          <Text style={ profileStyles.labelText }>Bio</Text>
          <TextInput
           style={ [ controlStyles.input, { width: '100%', height: 100 } ]}
           multiline={ true }
           numberOfLines={ 4 }
           defaultValue={ kitteh.bio }
           value={ tempKitteh.bio }
           onChangeText={ bioWasChanged }>
          </TextInput>
        </View>
        <View style={ profileStyles.detailsContainer }>
          <View style={ profileStyles.detailsColumn }>
            <Text style={ profileStyles.labelText }>Name</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.name }
             value={ tempKitteh.name }
             onChangeText={ nameWasChanged }>
            </TextInput>
            <Text style={ profileStyles.labelText }>Microchip #</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             inputMode='numeric'
             defaultValue={ kitteh.microchipNumber.toString() }
             value={ tempKitteh.microchipNumber.toString() }
             onChangeText={ chipNumWasChanged }>
            </TextInput>
            <Text style={ profileStyles.labelText }>Breed</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.breed }
             value={ tempKitteh.breed }
             onChangeText={ breedWasChanged }>
            </TextInput>
            {/* <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.dateFound }
             value={ tempKitteh.dateFound }
             onChangeText={ dateFoundWasChanged }>
            </TextInput> */}
            <DateInput label={ 'Rabies Vax Date (yyyy-mm-dd)' } date={ kitteh.rabiesVaxDate } tempDate={ tempKitteh.rabiesVaxDate } dateWasChanged={ rabiesVaxDateWasChanged }/>
            <Text style={ profileStyles.labelText }>Date Found (yyyy-mm-dd)</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.dateFound }
             value={ tempKitteh.dateFound }
             onChangeText={ dateFoundWasChanged }>
            </TextInput>
            <View style={ { flex: 1, flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ profileStyles.labelText }>Is Ear Tipped</Text>
              <Checkbox
               color='#177767'
               status={ tempKitteh.isEarTipped ? 'checked' : 'unchecked' }
               onPress={ () => { setTempKitteh({ ...tempKitteh, isEarTipped: !tempKitteh.isEarTipped }); } }
              />
            </View>
          </View>
          <View style={ [ profileStyles.detailsColumn, { height: '50%' } ] }>
            <Text style={ profileStyles.labelText }>Age (Years)</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             inputMode='numeric'
             defaultValue={ kitteh.ageYears ? kitteh.ageYears.toString() : '' }
             value={ tempKitteh.ageYears ? tempKitteh.ageYears.toString() : '' }
             onChangeText={ ageWasChanged }>
            </TextInput>
            <Text style={ profileStyles.labelText }>Gender</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.gender }
             value={ tempKitteh.gender }
             onChangeText={ genderWasChanged }>
            </TextInput>
            <Text style={ profileStyles.labelText }>Color</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.color }
             value={ tempKitteh.color }
             onChangeText={ colorWasChanged }>
            </TextInput>
            <Text style={ profileStyles.labelText }>FeLV/FiV Combo Vax Date (yyyy-mm-dd)</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             defaultValue={ kitteh.comboVaxDate }
             value={ tempKitteh.comboVaxDate }
             onChangeText={ comboVaxDateWasChanged }>
            </TextInput>
          </View>
        </View>
      </ScrollView>
      <View style={ controlStyles.container }>
        <TouchableOpacity
         style={ kitteh === tempKitteh ? controlStyles.buttonDisabled : controlStyles.button }
         disabled={ kitteh === tempKitteh ? true : false }
         onPress={ saveKittehData }>
          <Text style={ [ menuStyles.text, { padding: 4 } ] }>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { Checkbox } from 'react-native-paper';
import DateInput from '../../components/DateInput';
import { editProfileStyles, controlStyles, menuStyles } from "../../assets/mpm-styles";
import { createDefaultKitteh } from '../../utilites/utils';
import { addCatToRepository, updateCatInRepository } from '../../apis/db';

const appData = require('../../assets/app-data.json');

export default function EditKitteh() {
  const route = useRoute();
  const [saveEnabled, setSaveEnabled] = useState(false);

  var kittehIsNew = true;
  var { kitteh } = {};
  if (route.params) {
    kitteh = route.params;
  }
  
  if (kitteh) {
//    console.log(`Kitteh: ${kitteh.name}`);
    kittehIsNew = false; // db update, not add. 
  }

  let defaultKitteh = createDefaultKitteh();
  if (kitteh) {
    defaultKitteh = kitteh;
  }
  // Populate the temp kitteh with either the source or an empty one.
  const [tempKitteh, setTempKitteh] = useState(defaultKitteh);

  let intro = 'New Kitteh';
  if (defaultKitteh && defaultKitteh.name) {
    intro = `${defaultKitteh.name}'s Profile`;
  }

  const summaryWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, summary: text });
    setSaveEnabled(true);
  };
  const nameWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, name: text });
    setSaveEnabled(true);
  };
  const bioWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, bio: text });
    setSaveEnabled(true);
  };
  const genderWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, gender: text });
    setSaveEnabled(true);
  };
  const colorWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, color: text });
    setSaveEnabled(true);
  };
  const breedWasChanged = (text) => {
    setTempKitteh({ ...tempKitteh, breed: text });
    setSaveEnabled(true);
  };
  const chipNumWasChanged = (text) => {
    const parsedValue = parseInt(text);
    if (!isNaN(parsedValue)) {
      setTempKitteh({ ...tempKitteh, microchipNumber: parsedValue });
    } else {
      setTempKitteh({ ...tempKitteh, microchipNumber: null });
    }
    setSaveEnabled(true);
  };
  const ageWasChanged = (text) => {
    const parsedValue = parseInt(text);
    if (!isNaN(parsedValue)) {
      setTempKitteh({ ...tempKitteh, ageYears: parsedValue });
    } else {
      setTempKitteh({ ...tempKitteh, ageYears: null });
    }
    setSaveEnabled(true);
  };
  const dateFoundWasChanged = (newDate) => {
//    console.log(`Date Found: ${newDate.toString()}`);
    const formattedDate = newDate.toISOString().split('T')[0];
    setTempKitteh({ ...tempKitteh, dateFound: formattedDate });
//    console.log(`Date Found Set to: ${tempKitteh.dateFound}`);
    setSaveEnabled(true);
  };
  const rabiesVaxDateWasChanged = (newDate) => {
    const formattedDate = newDate.toISOString().split('T')[0];
    setTempKitteh({ ...tempKitteh, rabiesVaxDate: formattedDate });
//    console.log(`Rabies Vax Date Set to: ${tempKitteh.rabiesVaxDate}`);
    setSaveEnabled(true);
  };
  const comboVaxDateWasChanged = (newDate) => {
    const formattedDate = newDate.toISOString().split('T')[0];
    setTempKitteh({ ...tempKitteh, comboVaxDate: formattedDate });
//    console.log(`Combo Vax Date Set to: ${tempKitteh.comboVaxDate}`);
    setSaveEnabled(true);
  };

  const saveKittehData = () => {
    Keyboard.dismiss();
    if (kittehIsNew) {
//      console.log(`Adding profile data for new Kitteh: ${tempKitteh.name}`);
      addCatToRepository(tempKitteh);
      setSaveEnabled(false);
    } else {
//      console.log(`Saving profile data for Kitteh: ${tempKitteh.name}`);
      updateCatInRepository(tempKitteh);
      setSaveEnabled(false);
    }
  };

  return (
    <View style={ editProfileStyles.container }>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={ editProfileStyles.bioContainer }>
          <Text style={ editProfileStyles.title }>{ intro }</Text>
        </View>

        <View style={ editProfileStyles.detailsContainer }>
          <View style={ editProfileStyles.detailsColumn }>
            <Text style={ editProfileStyles.labelText }>Name</Text>
            <TextInput
              style={ [ controlStyles.input, { width: '95%' } ] }
              value={ tempKitteh.name }
              onChangeText={ nameWasChanged }>
            </TextInput>
            <Text style={ editProfileStyles.labelText }>Microchip #</Text>
            <TextInput
              style={ [ controlStyles.input, { width: '95%' } ]}
              inputMode='numeric'
              value={ (tempKitteh.microchipNumber > 0) ? tempKitteh.microchipNumber.toString() : '' }
              onChangeText={ chipNumWasChanged }>
            </TextInput>
            <Text style={ editProfileStyles.labelText }>Breed</Text>
            <TextInput
              style={ [ controlStyles.input, { width: '95%' } ]}
              value={ tempKitteh.breed }
              onChangeText={ breedWasChanged }>
            </TextInput>
          </View>
          <View style={ [ editProfileStyles.detailsColumn, { height: '50%' } ] }>
            <Text style={ editProfileStyles.labelText }>Age (Years)</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             inputMode='numeric'
             value={ tempKitteh.ageYears ? tempKitteh.ageYears.toString() : '' }
             onChangeText={ ageWasChanged }>
            </TextInput>
            <Text style={ editProfileStyles.labelText }>Gender</Text>
            <View style={ [controlStyles.input, { width: '95%' }] }>
              <Picker selectedValue={ tempKitteh.gender }
                onValueChange={ genderWasChanged }>
                {
                  appData.kittehGenders.map((value, index) => (
                    <Picker.Item key={ index } label={ value.gender } value={ value.gender } />
                  ))
                }
              </Picker>
            </View>
            <Text style={ editProfileStyles.labelText }>Color</Text>
            <TextInput
             style={ [ controlStyles.input, { width: '95%' } ]}
             value={ tempKitteh.color }
             onChangeText={ colorWasChanged }>
            </TextInput>
          </View>
        </View>

        <View style={ editProfileStyles.bioContainer }>
          <Text style={ editProfileStyles.labelText }>Summary</Text>
          <TextInput
           style={ [ controlStyles.input, { width: '100%' } ]}
           multiline={ true }
           value={ tempKitteh.summary }
           onChangeText={ summaryWasChanged }>
          </TextInput>
          <Text style={ editProfileStyles.labelText }>Bio</Text>
          <TextInput
           style={ [ controlStyles.input, { width: '100%', height: 100 } ]}
           multiline={ true }
           numberOfLines={ 4 }
           value={ tempKitteh.bio }
           onChangeText={ bioWasChanged }>
          </TextInput>
        </View>

        <View style={ editProfileStyles.detailsContainer }>
          <View style={ editProfileStyles.detailsColumn }>
            <DateInput label={ 'Rabies Vax Date' } tempDate={ tempKitteh.rabiesVaxDate } dateWasChanged={ rabiesVaxDateWasChanged }/>
            <DateInput label={ 'Date Found' } tempDate={ tempKitteh.dateFound } dateWasChanged={ dateFoundWasChanged }/>
            <View style={ { flex: 1, flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ editProfileStyles.labelText }>Is Ear Tipped</Text>
              <Checkbox
               color='#177767'
               status={ tempKitteh.isEarTipped ? 'checked' : 'unchecked' }
               onPress={ () => { setTempKitteh({ ...tempKitteh, isEarTipped: !tempKitteh.isEarTipped }); } }
              />
            </View>
          </View>
          <View style={ [ editProfileStyles.detailsColumn, { height: '40%' } ] }>
            <DateInput label={ 'FeLV/FiV Combo Vax Date' } tempDate={ tempKitteh.comboVaxDate } dateWasChanged={ comboVaxDateWasChanged }/>
          </View>
        </View>
      </ScrollView>
      <View style={ controlStyles.container }>
        <TouchableOpacity
         style={ !saveEnabled ? controlStyles.buttonDisabled : controlStyles.button }
         disabled={ !saveEnabled ? true : false }
         onPress={ saveKittehData }>
          <Text style={ [ menuStyles.text, { padding: 4 } ] }>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
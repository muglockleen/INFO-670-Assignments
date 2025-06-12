import { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { Icon } from 'react-native-paper';
import { controlStyles, profileStyles } from '../assets/mpm-styles';

export default function DateInput({ label, tempDate, dateWasChanged }) {

  var defaultDate = undefined;
  var tempDateAsDate = new Date(tempDate);
  console.log(`${label}: ${tempDate}`);
  if (!isNaN(tempDateAsDate) && tempDateAsDate.toString() !== 'Invalid Date') {
    defaultDate = tempDateAsDate;
  }
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(defaultDate);

  const onDateWasPicked = (params) => {
//    console.log(`onDateWasPicked: ${params.date.toString()}`);
    setDate(params.date);
    dateWasChanged(params.date);
  };

  return (
    <>
      <Text style={ profileStyles.labelText }>{ label }</Text>
      <View style={ { flex: 1, flexDirection: 'row', width: '95%' } }>
        <TextInput
          style={ [ controlStyles.input, { width: '80%' } ]}
          editable={ false }
          value={ date ? date.toISOString().split('T')[0] : '' }>
        </TextInput>
        <TouchableOpacity style={{ margin: 10 }} onPress={ () => setOpen(true) }>
          <Icon source='calendar' size={24} color="black" />
        </TouchableOpacity>
        <DatePickerModal
          locale='en'
          mode='single'
          visible={ open }
          date={ date ? date : new Date() }
          onConfirm={ (params) => {
            setOpen(false);
            onDateWasPicked(params);
          }}
          onDismiss={ () => { setOpen(false); }}
        />
      </View>
    </>
  );
}

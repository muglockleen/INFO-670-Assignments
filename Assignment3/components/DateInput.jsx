import { TextInput, Text, View } from 'react-native';
//import DatePicker from 'react-native-date-picker';
import { controlStyles, profileStyles } from '../assets/mpm-styles';

export default function DateInput({ label, date, tempDate, dateWasChanged }) {
  const onDateWasChanged = (text) => {
    const date = new Date(text);

    if(!isNaN(date) && date.toString() !== 'Invalid Date') {
      dateWasChanged(text);
    } else {
      // TODO(MPM): Handle this better. For now, we swallow the input.
    }
  };

  return (
    <>
      <Text style={ profileStyles.labelText }>{ label }</Text>
      <View style={ { flex: 1, flexDirection: 'row', width: '95%' } }>
        <TextInput
          style={ [ controlStyles.input, { width: '95%' } ]}
          defaultValue={ date }
          value={ tempDate }
          onChangeText={ onDateWasChanged }>
        </TextInput>
        {/* TODO(MPM): Implement */}
        {/* <DatePicker>

        </DatePicker> */}
      </View>
    </>
  );
}

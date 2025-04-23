import { Text, TouchableOpacity, View } from 'react-native';
import { itemStyles } from '../assets/mpm-styles';
import { controlStyles } from '../assets/mpm-styles';

export default function Kitteh({ index, kitteh, removeKitteh }) {
  let name = kitteh.name;
  if (kitteh.summary) {
    name = `${kitteh.name} - `;
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View>
        <TouchableOpacity
          style={ controlStyles.roundButtonSmall }
          onPress={ () => removeKitteh(kitteh) }>
          <Text style={ controlStyles.buttonTextSmall }>-</Text>
        </TouchableOpacity>
      </View>
      <View style={ itemStyles.content }>
         <Text key={ index } style={ itemStyles.title }>{ name }</Text>
         <Text key={ index }>{ kitteh && kitteh.summary }</Text>
      </View>
    </View>
  );
}
import { navigate } from '../utilites/utils';
import { TouchableOpacity, Text, View } from 'react-native';
import { menuStyles } from '../assets/mpm-styles';

export default function MenuBar() {
  const onButtonPress = (page) => {
    navigate(page, null);
  };

  return (
    <View style={ menuStyles.container }>
      <TouchableOpacity style={ menuStyles.button } onPress={ () => onButtonPress('New Kitteh') }>
        <Text style={ menuStyles.text }>New Kitteh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ menuStyles.button } onPress={ () => onButtonPress('Kittehs') }>
        <Text style={ menuStyles.text }>Kittehs</Text>
      </TouchableOpacity>
    </View>
  );
}

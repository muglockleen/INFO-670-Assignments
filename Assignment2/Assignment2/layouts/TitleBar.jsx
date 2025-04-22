import { Text, View } from 'react-native';
import { headerStyles } from "../assets/mpm-styles";

export default function TitleBar() {
  return (
    <View style={ headerStyles.header }>
      <Text style={ headerStyles.text }>Mikey's Home for Wayward Kittehs</Text>
    </View>
  );
}

import { Text, View, useState } from 'react-native';
import { headerStyles } from "../assets/mpm-styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TitleBar() {
  const appData = require(`../assets/app-data.json`);
  const insets = useSafeAreaInsets();

  return (
    <View style={ [headerStyles.header, { paddingTop: insets.top }] }>
      <Text style={ headerStyles.text }>{ appData.title }</Text>
    </View>
  );
}

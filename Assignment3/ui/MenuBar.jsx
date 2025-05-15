import { useState } from 'react';
import { navigate } from '../utils/utils';
import { TouchableOpacity, Text, View } from 'react-native';
import { menuStyles } from '../assets/mpm-styles';

export default function MenuBar() {
  const [currentPage, setCurrentPage] = useState(-1);

  // TODO(MPM): This algorithm only works if the buttons in this menu are the only ones.
  const onButtonPress = (id, page) => {
    setCurrentPage(id);
    navigate(page);
  };

  return (
    <View style={ menuStyles.container }>
      <TouchableOpacity style={ currentPage === 0 ? menuStyles.buttonSelected : menuStyles.button } onPress={ () => onButtonPress(0, 'Profile') }>
        <Text style={ menuStyles.text }>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ currentPage === 1 ? menuStyles.buttonSelected : menuStyles.button } onPress={ () => onButtonPress(1, 'Gallery') }>
        <Text style={ menuStyles.text }>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
}

import { Text, View, ScrollView } from "react-native";
import Kitteh from "../components/Kitteh";
import { listStyles } from '../assets/mpm-styles';

export default function Kittehs({ kittehs }) {
  const onRemoveKitteh = (kitteh) => {
    // TODO(MPM):
  }

  return (
    <View style={ listStyles.container }>
      <ScrollView style={ listStyles.content }>
        <Text style={ listStyles.text }>Teh Rezident Kittehs!</Text>
        { kittehs.map((value, index) => (
          <Kitteh key={ index } kitteh={ value } removeKitteh={ onRemoveKitteh }></Kitteh>
          ))
        }
      </ScrollView>
    </View>
  );
}
import { useRoute } from '@react-navigation/native';
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { profileStyles, controlStyles, menuStyles, listStyles } from "../../assets/mpm-styles";
import { navigate } from '../../utilites/utils';

export default function KittehProfile() {
  const route = useRoute();
  var { kitteh } = {};
  if (route.params) {
    kitteh = route.params;
  }

  let intro = 'No Profile to View!';
  if (kitteh) {
//    console.log(`Kitteh Profile: ${kitteh.name}`);
    intro = `Welcome to ${kitteh.name}'s Profile`;
  }

  const onEditKitteh = () => {
    navigate('New Kitteh', kitteh);
  };

  return (
    <View style={ profileStyles.container }>
      <ScrollView contentContainerStyle={ [ listStyles.content, { paddingBottom: 50 } ]}>
        <View style={ profileStyles.bioContainer }>
          <Text style={ profileStyles.title }>{ intro }</Text>
          <Text style={ profileStyles.text }>{ kitteh.bio }</Text>
        </View>
        <View style={ profileStyles.detailsContainer }>
          <View style={ profileStyles.detailsColumn }>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Name : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.name }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Microchip # : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.microchipNumber ? kitteh.microchipNumber.toString() : '' }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Breed : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.breed }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Age (Years) : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.ageYears ? kitteh.ageYears.toString() : 'Unknown' }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{`Gender : ` }</Text>
              <Text style={ profileStyles.text }>{`${ kitteh.gender }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Color : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.color }` }</Text>
            </View>
          </View>
          <View style={ profileStyles.detailsColumn }>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Date Found : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.dateFound }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Rabies Vax Date : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.rabiesVaxDate }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `FeLV/FiV Combo Vax Date : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.comboVaxDate }` }</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={ profileStyles.labelText }>{ `Is Ear Tipped : ` }</Text>
              <Text style={ profileStyles.text }>{ `${ kitteh.isEarTipped ? "Yes" : "No" }` }</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={ controlStyles.container }>
        <TouchableOpacity
         style={ controlStyles.button }
         onPress={ onEditKitteh }>
          <Text style={ [ menuStyles.text, { padding: 4 } ] }>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
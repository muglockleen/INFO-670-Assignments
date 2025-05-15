import { ScrollView, Image, Text, Pressable } from "react-native";
import { viewStyles, imageStyles } from "../../assets/mpm-styles";
import { useRoute } from '@react-navigation/native';
import { navigate } from "../../utils/utils";
import { Dimensions } from 'react-native';

export default function ImageView() {
  const route = useRoute();
  const { name, source, summary } = route.params;

  const width = Image.resolveAssetSource(source).width;
  const height = Image.resolveAssetSource(source).height;
  const newWidth = Dimensions.get('window').width * 0.90;
  const scaledHeight = height * (newWidth / width);

  return (
      <ScrollView style={ viewStyles.container } contentContainerStyle={{ paddingBottom: 50 }}>
        <Pressable onPress={ () => navigate('Gallery') }> 
          <Text style={ imageStyles.link }>&lt; Back to Cute Pictures of { name }</Text>
        </Pressable>
        <Image style={ [ imageStyles.full, { width: newWidth, height: scaledHeight } ] } title={ name } source={ source }/>
        <Text style={ imageStyles.text }>{ summary }</Text>
      </ScrollView>
    );
}
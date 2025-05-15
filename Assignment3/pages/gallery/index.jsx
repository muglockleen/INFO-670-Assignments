import { ScrollView, Text, Pressable, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { galleryStyles, imageStyles } from "../../assets/mpm-styles";
import { navigate, getImageSrcFor } from "../../utils/utils";

export default function Gallery() {
  const route = useRoute();
  const kitteh = route.params;

  let intro = 'Gallery Page';
  if (kitteh && kitteh.name) {
    intro = `Pixturez of ${kitteh.name}!`;
  }

  return (
    <ScrollView style={ galleryStyles.container } contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={ galleryStyles.text }>{ intro }</Text>
      { kitteh.images.map((value, index) => (
        <ListImage style={ imageStyles.container } image={value} key={value.id} />
        ))
      }
    </ScrollView>
  );
}

function ListImage({ image }) {
  const imageSrc = getImageSrcFor(image);

  return (
    <Pressable style={ imageStyles.container } onPress={ () => navigate('View', { name: image.title, source: imageSrc, summary: image.summary }) }>
      <Image style={ imageStyles.listItem } title={ image.title } source={ imageSrc }/>
      <Text style={ imageStyles.text }>{ image.summary }</Text>
    </Pressable>
  );
}
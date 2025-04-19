import { Text, SafeAreaView, View } from 'react-native';
import styles from './assets/mpm-styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Zekish's Assignment 2 List of Kittehs!</Text>
      </View>
      <View style={styles.content}>
        <Text>Do You See Meeeeeeeeeeee?</Text>
      </View>
    </SafeAreaView>
  );
}

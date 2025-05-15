import { SafeAreaView } from 'react-native-safe-area-context';
import TitleBar from './ui/TitleBar';
import MainStack from './ui/MainStack.jsx';
import { mainStyles } from './assets/mpm-styles.js';

export default function App() {
  return (
    <SafeAreaView style={ mainStyles.container }>
      <TitleBar />
      <MainStack />
    </SafeAreaView>
  );
}
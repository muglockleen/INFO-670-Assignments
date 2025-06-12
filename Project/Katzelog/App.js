import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleBar from './ui/TitleBar';
import MainStack from './ui/MainStack.jsx';
import { mainStyles } from './assets/mpm-styles.js';
import { en, registerTranslation } from 'react-native-paper-dates';

registerTranslation('en', en);

export default function App() {
  return (
    <SafeAreaProvider style={ mainStyles.container }>
      <TitleBar />
      <MainStack />
    </SafeAreaProvider>
  );
}
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
    padding: 10
  },
  header: {
    flex: 2,
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#d1dddb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#030303'
  },
  content: {
    flex: 16,
    backgroundColor: '#ffffff',
    fontSize: 12,
    color: '#030303',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = styles;
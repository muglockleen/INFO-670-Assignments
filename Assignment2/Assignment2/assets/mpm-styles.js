import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const mainStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
    padding: 10,
    paddingTop: 75
  }
});

export const headerStyles = StyleSheet.create({
  header: {
    // flex: 1,
    width: '100%',
    padding: 4,
    borderRadius: 30,
    backgroundColor: '#d1dddb',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#030303'
  }
});

export const controlStyles = StyleSheet.create({
  header: {
    flex: 5.5,
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    backgroundColor: 'lightgray',
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  input: {
    backgroundColor: '#ffffff',
    width: windowWidth * 0.75,
    marginTop: 4,
    borderRadius: 6
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16
  },

  roundButton: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    marginRight: 8
  },

  roundButtonDisabled: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    marginRight: 8
  },

  roundButtonSmall: {
    width: 25,
    height: 25,
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginRight: 4
  },

  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 4
  },

  buttonText: {
    fontSize: 30,
    color: 'white'
  },

  buttonTextSmall: {
    fontSize: 18,
    color: 'white'
  }
});

export const listStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 16,
    paddingTop: 10
  },

  content: {
    backgroundColor: '#d1dddb',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});

export const itemStyles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    fontSize: 12,
    color: '#030303',
    padding: 8,
    borderRadius: 10,
    margin: 5,
    width: '90%'
  },

  title: {
    fontWeight: 'bold'
  }
});

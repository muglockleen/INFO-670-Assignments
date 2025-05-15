import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const mainStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
    padding: 10,
    paddingTop: 10
  }
});

export const headerStyles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    padding: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#d1dddb',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#030303'
  }
});

export const menuStyles = StyleSheet.create({
  container: {
//    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderStyle: 'solid',
    borderColor: '#106355',
    borderWidth: 2,
    backgroundColor: '#177767',
    margin: 0,
    marginTop: 2
  },

  button: {
    flex: 1,
    backgroundColor: '#177767',
    alignItems: 'center'
  },

  buttonSelected: {
    flex: 1,
    backgroundColor: '#177767',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 2
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

export const controlStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    margin: 0,
    marginTop: 2
  },

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
    borderRadius: 6,
    textAlignVertical: 'top',
    marginBottom: 4
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

  button: {
    flex: 1,
    backgroundColor: '#177767',
    alignItems: 'center'
  },

  buttonDisabled: {
    flex: 1,
    backgroundColor:'#b7d6d1',
    alignItems: 'center'
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

export const profileStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
    paddingTop: 10
  },

  bioContainer: {
    flex: 1,
    padding: 4
  },

  detailsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 4
  },

  detailsColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2
  },

  content: {
    backgroundColor: '#d1dddb',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10
  },

  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },

  labelText: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 2,
    marginTop: 4
  },

  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 2,
    marginTop: 2
  }
});

export const galleryStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
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
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});

export const viewStyles = StyleSheet.create({
  container: {
    fontFamily: [ 'Verdana-Bold', 'Verdana-BoldItalic', 'Verdana-Italic' ],
    flex: 1,
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

export const imageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  listItem: {
//    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
    width: 150,
    height: 150
  },

  full: {
    margin: 4,
    borderRadius: 10,
    // maxWidth: windowWidth * 0.75,
    // maxHeight: windowHeight * 0.75
  },

  text: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center'
  },

  link: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
    color: '#177767'
  }
});
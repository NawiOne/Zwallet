import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('screen').height * (95 / 100);

export default StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    height,
  },
  header: {
    height: 180,
    // backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  bar: {
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  tabTitle: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
  },
  contact: {
    padding: 20,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  imgUser: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 18,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  contentTitle: {
    marginTop: 20,
  },
  name: {
    color: '#4D4B57',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  num: {
    color: '#7A7886',
    fontSize: 15,
  },
  inputAmount: {
    marginTop: 20,
    fontSize: 40,
    marginBottom: 20,
    color: '#6379F4',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputNote: {
    paddingLeft: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A3A3',
    fontSize: 17,
  },
  inputNoteActive: {
    paddingLeft: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#6379F4',
    fontSize: 17,
    color: '#3A3D42',
  },
  icon: {
    position: 'absolute',
  },
  btnContinue: {
    width: '100%',
    padding: 18,
    backgroundColor: '#DADADA',
    marginTop: 120,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  btnContinueActive: {
    width: '100%',
    padding: 18,
    backgroundColor: '#6379F4',
    marginTop: 120,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  str: {
    fontSize: 18,
    color: '#88888F',
    fontWeight: 'bold',
  },
  strActive: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('screen').height * (95 / 100);

export default StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // height,
  },
  header: {
    height: 200,
    backgroundColor: '#6379F4',
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
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  contact: {
    padding: 13,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  imgUser: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 18,
  },
  content: {
    paddingTop: 20,
    padding: 30,
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

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  left: {
    padding: 10,
    backgroundColor: 'white',
    width: 140,
    borderRadius: 10,
  },
  right: {
    padding: 10,
    justifyContent: 'flex-start',
    width: 140,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  note: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    color: '#7A7886',
    lineHeight: 22,
    marginBottom: 10,
  },
  item: {
    color: '#514F5B',
    fontSize: 19,
    fontWeight: 'bold',
  },

  btnContinue: {
    width: '100%',
    padding: 18,
    backgroundColor: '#6379F4',
    marginTop: 40,
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

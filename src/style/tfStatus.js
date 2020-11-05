import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor: 'white',
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

  status: {
    alignSelf: 'center',
    marginTop: 40,
    alignItems: 'center',
  },
  rounded: {
    width: 65,
    height: 65,
    backgroundColor: '#1EC15F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  textStatus: {
    color: '#4D4B57',
    fontSize: 22,
  },
  content: {
    paddingTop: 20,
    padding: 20,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subList: {
    marginTop: 7,
    backgroundColor: 'white',
    padding: 10,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  title: {
    fontSize: 16,
    color: '#7A7886',
    lineHeight: 22,
    // marginBottom: 10,
  },
  item: {
    color: '#514F5B',
    fontSize: 17,
    fontWeight: 'bold',
    // marginBottom: 18,
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
  receiver: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: -3,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
});

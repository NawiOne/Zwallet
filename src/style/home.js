import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
  },
  header: {
    padding: 15,
    paddingTop: 40,
    height: 130,
    backgroundColor: '#6379F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profile: {
    flexDirection: 'row',
    height: 60,
  },
  imgUser: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  amount: {
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  operation: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10,
  },
  transfer: {
    backgroundColor: '#E5E8ED',
    width: 140,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding:8,
    justifyContent: 'center',
  },
  topUp: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E8ED',
    borderRadius: 10,
    padding:8,
    justifyContent: 'center',
  },
  operatText: {
    marginLeft: 10,
    color: '#514F5B',
    fontSize: 18,
  },
  transHistory: {
    // padding: 20,
    marginTop: -10,
  },
  transHeader: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  flatList: {
    height: 320,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    marginBottom: 15,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  user: {
    flexDirection: 'row',
    height: 56,
  },
  imgList: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
  userName: {
    justifyContent: 'space-between',
  },
});

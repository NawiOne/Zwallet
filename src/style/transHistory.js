import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  tabTitle: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  content: {
    padding: 20,
    marginBottom: 90,
  },
  nameCategory: {
    color: '#7A7886',
    fontSize: 18,
    marginBottom: 30,
  },
  flatList: {
    // height: '',
    // marginBottom:20,
    // flex: 1,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
  bottom: {
    // position: 'absolute',
    height: 90,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 30,
    paddingRight: 40,
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  btnActive: {
    backgroundColor: '#6379F4',
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
  },
  textBottom: {
    color: '#6379F4',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    width: 150,
    textAlign: 'center',
  },
});

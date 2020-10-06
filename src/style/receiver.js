import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('screen').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  bar: {
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  tabTitle: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  searchBar: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    // padding: 3,
    paddingLeft: 10,
    borderRadius: 12,
  },
  content: {
    // padding: 20,
  },
  contentTitle: {
    marginTop: 20,
    // marginBottom: 50,
  },
  contact: {
    fontSize: 18,
    color: '#514F5B',
    fontWeight: 'bold',
    lineHeight: 25,
    marginBottom: 10,
  },
  contactTitle: {
    padding: 20,
  },
  subTitleContact: {
    marginBottom: 10,
    fontSize: 14,
    color: '#8F8F8F',
    lineHeight: 19,
  },

  flatList: {
    marginTop: 10,
    height: 355,
    paddingBottom: 20,
  },
  itemList: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
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

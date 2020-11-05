import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  tab: {
    height: 70,
    padding: 20,
  },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgUser: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  edit: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editTxt: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7A7886',
  },
  name: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 40,
  },
  listOperation: {
    backgroundColor: '#E5E8ED',
    padding: 27,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  nameOperation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
});

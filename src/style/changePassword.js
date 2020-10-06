import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
  brandName: {
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 26,
    fontWeight: 'bold',
  },
  descript: {
    marginTop: 23,
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    color: '#7A7886',
    textAlign: 'center',
    lineHeight: 27,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  inputNote: {
    paddingLeft: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A3A3',
    fontSize: 17,
  },
  icon: {
    paddingLeft: 20,
    position: 'absolute',
  },
  iconLeft: {
    padding: 15,
    right: 0,
    paddingRight: 20,
    position: 'absolute',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 12,
  },
  loginBtnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 12,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  loginTextActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

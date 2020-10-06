import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    flex: 1,
  },
  brandName: {
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 26,
    fontWeight: 'bold',
  },
  descript: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#878787',
  },
  form: {
    marginTop: 10,
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
    borderRadius: 12,
  },
  loginBtnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
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
  haveAcc: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#5D5757',
  },
  signup: {
    color: '#6379F4',
    fontWeight: 'bold',
  },
  // for create PIN
  cellPin: {
    borderRadius: 10,
    width: 40,
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  formPin: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 80,
    height: 80,
    backgroundColor: '#1EC15F',
    borderRadius: 80,
    marginBottom: 20,
  },
  successText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#88888F',
    marginTop: 20,
  },
});

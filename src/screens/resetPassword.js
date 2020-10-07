import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetPasswordCreator,
  clearStatusCreator,
  getUserCreator,
  loginCreator,
} from '../redux/actions/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const height = Dimensions.get('screen').height;
import { useRoute, useNavigation } from '@react-navigation/native';

const RessetPassword = () => {
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [msg, setMsg] = useState(null);
  const [msg2, setMsg2] = useState(null);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [visible, setVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const { email } = route.params;
  console.log(email)

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleSubmit = () => {
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    if (pass1 === '') {
      setMsg('require');
    } else if (pass2 === '') {
      setMsg2('require');
    } else if (!checkPass.test(pass1)) {
      setMsg(
        'Password must contain at least 1 number, and be longer than 8 charaters.',
      );
      setMsg2(null);
    } else if (pass1 !== pass2) {
      setMsg2('Password is not matching');
    } else {
      dispatch(resetPasswordCreator(pass1, email));
    }
  };

  useEffect(() => {
    if (auth.status === 200) {
      setVisible(!visible);
      dispatch(clearStatusCreator());
    }
  });

  return (
    <>
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.header}>
          <Text style={style.brand}>Zwallet</Text>
        </View>
        <View style={style.content}>
          <View style={style.title}>
            <Text style={style.titleText}>Reset Password</Text>
            <Text style={style.desc}>
              Create and confirm your new password so you can login to Zwallet
            </Text>
          </View>
          <View style={style.form}>
            <Icon
              name="email-outline"
              style={style.icon}
              size={25}
              color={pass1 === '' ? '#878787' : '#6379F4'}
            />
            <TextInput
              placeholder="Create new password"
              style={pass1 === '' ? style.input : style.inputFilled}
              onChangeText={(text) => {
                setPass1(text);
                setMsg(null);
              }}
              secureTextEntry={show1}
            />
            <View style={style.iconEye}>
              <Icon
                name={show1 ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                style={style.icon}
                color={pass1 === '' ? '#878787' : 'black'}
                onPress={() => setShow1(!show1)}
              />
            </View>
          </View>
          {msg === null ? null : <Text style={style.msg}>{msg}</Text>}
          <View style={style.form}>
            <Icon
              name="email-outline"
              style={style.icon}
              size={25}
              color={pass2 === '' ? '#878787' : '#6379F4'}
            />
            <TextInput
              placeholder="Confirm new password"
              style={pass2 === '' ? style.input : style.inputFilled}
              onChangeText={(text) => {
                setPass2(text);
                setMsg2(null);
              }}
              secureTextEntry={show2}
            />
            <View style={style.iconEye}>
              <Icon
                name={show2 ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                style={style.icon}
                color={pass2 === '' ? '#878787' : 'black'}
                onPress={() => setShow2(!show2)}
              />
            </View>
          </View>
          {msg2 === null ? null : <Text style={style.msg2}>{msg2}</Text>}
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={style.confirm}>Resset Password</Text>
          </TouchableOpacity>
        </View>
        <Overlay isVisible={visible} overlayStyle={style.overlay}>
          <View style={style.overlayCont}>
            <Text style={{ fontWeight: 'bold' }}>Reset password success</Text>
            <TouchableOpacity
              style={style.overlayBtn}
              onPress={() => {
                setVisible(!visible);
                navigation.navigate('login');
              }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </ScrollView>
    </>
  );
};
export default RessetPassword;

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    color: '#6379F4',
    fontWeight: 'bold',
    fontSize: 26,
  },
  content: {
    height,
    backgroundColor: 'white',
    position: 'relative',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: {
    alignItems: 'center',
    top: 10,
    bottom: 20,
    padding: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  desc: {
    textAlign: 'center',
    color: '#878787',
  },
  form: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  input: {
    width: '99%',
    position: 'absolute',
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    paddingLeft: 40,
    alignSelf: 'center',
    fontSize: 16,
  },
  inputFilled: {
    width: '99%',
    position: 'absolute',
    borderBottomColor: '#6379F4',
    borderBottomWidth: 1,
    paddingLeft: 40,
    alignSelf: 'center',
    fontSize: 16,
  },
  icon: {
    marginTop: 1,
  },
  iconEye: {
    top: -5,
    position: 'absolute',
    right: 0,
    padding: 10,
    zIndex: 9999,
  },
  btn: {
    marginTop: '30%',
    alignSelf: 'center',
    width: '99%',
    backgroundColor: '#6379F4',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
  },
  confirm: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  msg: {
    position: 'absolute',
    color: 'red',
    top: 186,
    left: 20,
  },
  msg2: {
    position: 'absolute',
    color: 'red',
    top: 274,
    left: 20,
  },
  overlay: {
    width: '60%',
    padding: 25,
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  overlayCont: {
    alignItems: 'center',
  },
  overlayBtn: {
    marginTop: 30,
    backgroundColor: '#6379F4',
    padding: 15,
    width: 80,
    alignItems: 'center',
    borderRadius: 10,
  },
});

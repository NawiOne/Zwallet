import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerCreator, clearStatusCreator } from '../redux/actions/auth';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import style from '../style/auth';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState(null);
  const [msg1, setMsg1] = useState(null);
  const [msg2, setMsg2] = useState(null);
  const navigation = useNavigation();
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const allEmpty = () => {
    if (user === '' || email === '' || pass === '') {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = () => {
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    const checkEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!allEmpty()) {
      if (!checkEmail.test(email)) {
        setMsg1('Invalid email');
      } else if (!checkPass.test(pass)) {
        setMsg2(
          'Password must contain at least 1 number, and be longer than 8 charaters.',
        );
      } else {
        dispatch(registerCreator(user, email, pass));
      }
    }
  };
  useEffect(() => {
    if (auth.status === 200) {
      navigation.navigate('createpin', { email: email, password: pass });
      dispatch(clearStatusCreator());
      setMsg1(null);
    } else if (auth.status === 500) {
      setMsg('Email already used');
      dispatch(clearStatusCreator());
    }
  }, [auth, dispatch, navigation]);

  return (
    <ScrollView
      contentContainerStyle={style.containerSignup}
      showsVerticalScrollIndicator={false}>
      <Text style={style.brandNameSignup}>Zwallet</Text>
      <View style={style.contentSignup}>
        {auth.isPending ? (
          <ActivityIndicator color="black" style={style.loading} />
        ) : null}
        {msg === null ? null : <Text style={styling.error1}>{msg}</Text>}
        <View style={style.descript}>
          <Text style={style.header}>Sign Up</Text>
          <Text style={style.subHeader}>
            Create your account to access Zwallet
          </Text>
        </View>
        <View style={style.form}>
          <Input
            placeholder="Enter your username"
            leftIcon={
              <IconUser
                name="user"
                size={24}
                color={user === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(text) => setUser(text)}
          />
          {msg1 === null ? null : <Text style={styling.error2}>{msg1}</Text>}
          <Input
            placeholder="Enter your e-mail"
            leftIcon={
              <Icon
                name="email-outline"
                size={24}
                color={email === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(text) => {
              setEmail(text);
              setMsg(null);
              setMsg1(null);
              setMsg2(null);
            }}
          />
          <Input
            placeholder="Enter your password"
            leftIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={pass === '' ? '#878787' : '#6379F4'}
              />
            }
            rightIcon={
              <Icon
                name={!show ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#878787"
                onPress={() => {
                  setShow(!show);
                }}
              />
            }
            onChangeText={(text) => {
              setPass(text);
              setMsg(null);
              setMsg1(null);
              setMsg2(null);
            }}
            secureTextEntry={show}
          />
          {msg2 === null ? null : <Text style={styling.error3}>{msg2}</Text>}
        </View>
        <TouchableOpacity
          style={allEmpty() ? style.loginBtn : style.loginBtnActive}
          onPress={() => {
            if (!allEmpty()) {
              handleSubmit();
            }
          }}>
          <Text style={allEmpty() ? style.loginText : style.loginTextActive}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Text style={style.haveAcc}>
            Already have an account? <Text style={style.signup}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styling = StyleSheet.create({
  error1: {
    color: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    fontWeight: 'bold',
    lineHeight: 20,
    fontSize: 17,
  },
  error2: {
    color: 'red',
    position: 'absolute',

    top: '55%',
    left: 10,
  },
  error3: {
    color: 'red',
    position: 'absolute',

    top: '88%',
    left: 10,
  },
});

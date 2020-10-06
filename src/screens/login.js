import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  loginCreator,
  clearStatusCreator,
  getUserCreator,
} from '../redux/actions/auth';
import asyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../style/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {auth} = useSelector((state) => state);
  const [msg, setMsg] = useState(null);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(true);
  console.log(msg);
  console.log(auth.status);

  const allEmpty = () => {
    if (email === '' || pass === '') {
      return true;
    }
  };

  useEffect(() => {
    asyncStorage.getItem('token').then((res) => {
      if (res !== null) {
        dispatch(getUserCreator(auth.data.email));
        navigation.navigate('home');
        navigation.reset({
          index: 0,
          routes: [{name: 'home'}],
        });
      }
    });
  }, [navigation, auth]);

  useEffect(() => {
    if (auth.status === 500) {
      setMsg('Sorry email or password is wrong');
      dispatch(clearStatusCreator());
    }
  }, [auth, dispatch, navigation]);

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <Text style={style.brandName}>Zwallet</Text>
      <View style={style.content}>
        {msg === null ? null : <Text style={style2.error}>{msg}</Text>}
        <View style={style.descript}>
          <Text style={style.header}>Login</Text>
          <Text style={style.subHeader}>
            Login to your existing account to access
          </Text>
          <Text style={style.subHeader}>all the features in Zwallet</Text>
        </View>
        <View style={style.form}>
          <Input
            placeholder="Enter your e-mail"
            keyboardAppearance="dark"
            leftIcon={
              <Icon
                name="email-outline"
                size={24}
                color={email === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(text) => setEmail(text)}
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
            }}
            secureTextEntry={show}
          />
        </View>
        <Text
          style={style.forgot}
          onPress={() => {
            navigation.navigate('enteremail');
          }}>
          Forgot password?
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (!allEmpty()) {
              dispatch(loginCreator(email, pass));
            }
          }}
          style={allEmpty() ? style.loginBtn : style.loginBtnActive}>
          <Text style={allEmpty() ? style.loginText : style.loginTextActive}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('jejejej');
            navigation.navigate('signup');
            setMsg(null);
          }}>
          <Text style={style.haveAcc}>
            Don't have an acount? Let's{' '}
            <Text style={style.signup}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const style2 = StyleSheet.create({
  error: {
    top: '3%',
    position: 'absolute',
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

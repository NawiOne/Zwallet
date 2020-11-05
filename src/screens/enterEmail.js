import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import RNSmtpMailer from 'react-native-smtp-mailer';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailCreator, clearStatusCreator } from '../redux/actions/auth';
import { sharedVariable } from '../../env';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const height = Dimensions.get('screen').height;
import { useNavigation } from '@react-navigation/native';

const otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleSubmit = () => {
    if (email === '') {
      console.log('require');
      setMsg('require');
    } else {
      dispatch(getEmailCreator(email));
    }
  };

  const handleEmail = () => {
    RNSmtpMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      ssl: true,
      username: sharedVariable.hostEmail,
      password: sharedVariable.password,
      from: sharedVariable.sender,
      recipients: email,
      subject: 'OTP code',
      htmlBody: `<p>${otp}</p>`,
      attachmentPaths: [],
      attachmentNames: [],
      attachmentTypes: [],
    })
      .then((success) => console.log(success, 'success'))
      .catch((err) => console.log(err, 'errorr cuyyy'));
  };

  useEffect(() => {
    if (auth.status === 200) {
      if (auth.email.length) {
        handleEmail();
        navigation.navigate('otp', {
          email: email,
          otp: otp,
        });
        dispatch(clearStatusCreator());
      } else {
        setMsg('Sorry email is not found');
        dispatch(clearStatusCreator());
      }
    }
  }, [auth.status]);

  useEffect(() => {
    if (auth.isPending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth.isPending]);

  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.brand}>Zwallet</Text>
        </View>
        <View style={style.content}>
          {loading ? (
            <ActivityIndicator color="black" style={style.loading} />
          ) : null}
          <View style={style.title}>
            <Text style={style.titleText}>Reset Password</Text>
            <Text style={style.desc}>
              Enter your Zwallet E-mail so we can send you a password reset OTP
              code
            </Text>
          </View>
          <View style={style.form}>
            <Icon
              name="email-outline"
              style={style.icon}
              size={25}
              color={email === '' ? '#878787' : '#6379F4'}
            />
            <TextInput
              placeholder="Enter your email"
              style={email === '' ? style.input : style.inputFilled}
              onChangeText={(text) => {
                setEmail(text);
                setMsg(null);
              }}
            />
          </View>
          {msg === null ? null : <Text style={style.msg}>{msg}</Text>}
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={style.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default EnterEmail;

const style = StyleSheet.create({
  container: {
    flex: 1,
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
    borderTopWidth: 0.5,
    borderColor: '#EEEEEE',
    elevation: 1,
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
    marginTop: 12,
  },
  btn: {
    marginTop: '70%',
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
    top: 45,
    color: 'red',
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: 7,
  },
});

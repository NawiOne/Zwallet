import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import SmootPinCode from 'react-native-smooth-pincode-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../style/auth';
import style2 from '../style/enterPIN';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTP = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState(null);
  console.log(pin.length);
  const filled = () => {
    if (pin.length === 4) {
      return true;
    } else {
      return false;
    }
  };

  const { email, otp } = route.params;
  console.log(email, otp);

  const handleSubmit = () => {
    if (pin !== otp) {
      setMsg('Wrong OTP code');
      console.log(msg);
    } else {
      setMsg(null);
      navigation.navigate('resetpassword', {
        email: email,
      });
    }
  };

  const backAction = () => {
    Alert.alert('', 'Cancel?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => navigation.navigate('login') },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View>
      <View style={style2.header}>
        <View style={style2.bar}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={style2.tabTitle}>Reset Pasword</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={
          (style2.container, { padding: 20, marginTop: -30 })
        }
        showsVerticalScrollIndicator={false}>
        <View style={style.descript}>
          <Text style={style2.subTitle}>
            Enter 4 digits OTP code we sent to your E-mail
          </Text>
        </View>
        {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null}
        <View style={style.formPin}>
          <SmootPinCode
            password={true}
            codeLength={4}
            value={pin.toString()}
            cellStyle={filled() ? style2.cellPinFilled : style2.cellPin}
            onTextChange={(num) => {
              setMsg(null);
              setPin(num);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (filled()) {
              handleSubmit();
            }
          }}
          style={
            !filled() ? style2.loginBtnContinue : style2.loginBtnActiveContinue
          }>
          <Text style={!filled() ? style2.loginText : style2.loginTextActive}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OTP;

const errorStyle = StyleSheet.create({
  error: {
    color: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: '21%',
  },
});

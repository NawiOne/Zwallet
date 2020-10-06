import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Axios from 'axios';
import {useSelector} from 'react-redux';
import SmootPinCode from 'react-native-smooth-pincode-input';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import style from '../style/auth';
import style2 from '../style/enterPIN';

const EnterChangePIN = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState(null);
  console.log(pin.length);
  const filled = () => {
    if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const url = `http://192.168.43.52:2000/auth/getpin?email=${auth.data.email}`;
    let data = {
      pin: pin,
    };
    Axios.post(url, data)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setMsg(null);
          navigation.navigate('changepin');
        } else {
          setMsg('Your PIN is wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Text style={style2.tabTitle}>Change PIN</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={
          (style2.container, {padding: 20, marginTop: -30})
        }
        showsVerticalScrollIndicator={false}>
        <View style={style.descript}>
          <Text style={style2.subTitle}>
            Enter your current 6 digits Zwallet PIN below to continue the next
            step
          </Text>
        </View>
        {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null}
        <View style={style.formPin}>
          <SmootPinCode
            password={true}
            codeLength={6}
            value={pin.toString()}
            cellStyle={filled() ? style2.cellPinFilled : style2.cellPin}
            onTextChange={(num) => setPin(num)}
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

export default EnterChangePIN;

const errorStyle = StyleSheet.create({
  error: {
    color: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: '21%',
  },
});

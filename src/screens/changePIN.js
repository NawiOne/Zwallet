import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import Axios from 'axios';
import {useSelector} from 'react-redux';
import SmootPinCode from 'react-native-smooth-pincode-input';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import style from '../style/auth';
import style2 from '../style/enterPIN';

const ChangePIN = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const [pin, setPin] = useState('');
  const [visble, setVisible] = useState(false);
  const filled = () => {
    if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  };
  console.log(auth.data.id);

  const handleSubmit = () => {
    const url = `http://192.168.43.52:2000/auth/changepin?id=${auth.data.id}`;
    let data = {
      pin: pin,
    };
    Axios.patch(url, data)
      .then((res) => {
        if (res.data.status === 200) {
          setVisible(true);
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
            Type your new 6 digits security PIN to user in Zwallet
          </Text>
        </View>
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
          style={!filled() ? style2.loginBtn : style2.loginBtnActive}>
          <Text style={!filled() ? style2.loginText : style2.loginTextActive}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Overlay isVisible={visble} overlayStyle={overlay.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={overlay.title}>Change PIN success</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
              navigation.navigate('profile');
            }}
            style={overlay.btn}>
            <Text style={overlay.ok}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default ChangePIN;

const overlay = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '60%',
    height: 120,
    borderRadius: 10,
    top: -20,
  },
  title: {
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#6379F4',
    padding: 15,
    width: 80,
    borderRadius: 12,
    alignItems: 'center',
  },
  ok: {
    fontWeight: 'bold',
    color: 'white',
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import SmootPinCode from 'react-native-smooth-pincode-input';
import style from '../style/newPIN';
import {useTheme} from '@react-navigation/native';

const NewPIN = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [show, setShow] = useState(true);
  const [pin, setPin] = useState('');
  console.log(pin);

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <View style={style.descript}>
        <Text style={style.subHeader}>
          Create a PIN that's contain 6 digits number for
        </Text>
        <Text style={style.subHeader}>security purpose in Zwallet.</Text>
      </View>
      <View style={style.formPin}>
        <SmootPinCode
          password={true}
          autoFocus={true}
          codeLength={6}
          value={pin.toString()}
          cellStyle={style.cellPin}
          onTextChange={(pin) => setPin(pin)}
        />
      </View>
      <TouchableOpacity
        style={pin.length !== 6 ? style.loginBtn : style.loginBtnActive}
        onPress={() => {
          if (pin.length === 6) {
            navigation.navigate('home');
          }
        }}>
        <Text
          style={pin.length !== 6 ? style.loginText : style.loginTextActive}>
          Change PIN
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewPIN;

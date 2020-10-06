import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { doTransCreator, notifCreator, setNumNotifCreator } from '../redux/actions/transaction';
import { clearStatusCreator } from '../redux/actions/auth';
import { useRoute, useNavigation } from '@react-navigation/native';
import SmootPinCode from 'react-native-smooth-pincode-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../style/auth';
import style2 from '../style/enterPIN';
import PushNotification from 'react-native-push-notification';
import { showLocalNotification } from '../assets/handleNotification';

const EnterPIN = () => {
  const { auth, transaction, contact } = useSelector((state) => state);
  const dispatch = useDispatch();
  const channelId = 'transNotification';

  const route = useRoute();
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState(null);

  const filled = () => {
    if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  };

  const {
    sender_id,
    receiver_id,
    trans_name,
    trans_type,
    amount,
    notes,
    date,
    balance,
    time,
  } = route.params;

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
          dispatch(
            doTransCreator(
              sender_id,
              receiver_id,
              trans_name,
              trans_type,
              amount,
              notes,
              balance,
            ),
          );
        } else {
          setMsg('Your PIN is wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (transaction.dataStatus === 200) {
      navigation.navigate('transferstatus', {
        amount: amount,
        notes: notes,
        date: date,
        balance: balance,
        time: time,
      });
      showLocalNotification(
        'Zwallet',
        `Transfer to ${contact.oneContact.username} success`,
        channelId,
      );
      dispatch(notifCreator(sender_id, receiver_id, amount, trans_type));
      dispatch(setNumNotifCreator())
      dispatch(clearStatusCreator());
      setMsg(null);
    } else if (transaction.dataStatus === 500) {
      setMsg('transaction failed');
      dispatch(clearStatusCreator());
    }
  }, [transaction.dataStatus, dispatch, navigation]);

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId,
        channelName: 'trans notification',
      },
      (created) => console.log(`createChannel returned '${created}'`),
    );
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
          <Text style={style2.tabTitle}>Enter Your PIN</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={style2.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.descript}>
          <Text style={style.header}>Enter PIN to Transfer</Text>
          <Text style={style2.subTitle}>
            Enter your 6 digits PIN for confirmation to continue transfering
            money
          </Text>
          {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null}
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
            Transfer Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EnterPIN;

const errorStyle = StyleSheet.create({
  error: {
    color: 'red',
    position: 'absolute',
    top: 95,
  },
});

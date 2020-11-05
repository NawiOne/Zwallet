import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import _ioClient from 'socket.io-client';
import asyncStorage from '@react-native-community/async-storage';
import { getUserCreator } from '../redux/actions/auth';
import {
  getSampleHistoryCreator,
  resetNumNotifCreator,
} from '../redux/actions/transaction';
import { clearStatusCreator } from '../redux/actions/auth';
import style from '../style/home';
import imgUser from '../assets/image/avatar.webp';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

// component
import TransHistory from '../components/transHistory';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { auth, transaction } = useSelector((state) => state);
  const [neErr, setErr] = useState();
  const curency = new Intl.NumberFormat('de-DE').format(auth.dataUser.balance);

  useEffect(() => {
    const token = asyncStorage.getItem('token');
    token.then((res) => {
      console.log(res);
      if (res === null) {
        navigation.navigate('login');
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }
    });
    dispatch(getUserCreator(auth.data.email));
    setTimeout(() => {
      dispatch(getSampleHistoryCreator(auth.data.id));
    }, 1000);
  }, []);
  useEffect(() => {
    if (auth.isRejected) {
      setErr('network error');
    }
  }, [auth.isRejected]);

  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4" />
      <View style={style.header}>
        <TouchableOpacity
          style={style.profile}
          onPress={() => navigation.navigate('profile')}>
          {auth.dataUser === undefined ? (
            <Image source={imgUser} style={style.imgUser} />
          ) : auth.dataUser.picture !== null ? (
            <Image
              source={{ uri: auth.dataUser.picture }}
              style={style.imgUser}
            />
          ) : (
            <Image source={imgUser} style={style.imgUser} />
          )}
          <View style={style.amount}>
            <Text style={{ color: '#D0D0D0', fontSize: 15 }}>Balance</Text>
            <Text style={{ color: 'white', fontSize: 24 }}>Rp{curency}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Icon
            name="notifications-outline"
            color="white"
            size={30}
            style={{ marginTop: 15 }}
            onPress={() => {
              dispatch(resetNumNotifCreator());
              navigation.navigate('notification');
            }}
          />
          {transaction.numOfNotif === 0 ? null : (
            <View style={innerstyle.badge}>
              <Text>{transaction.numOfNotif}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={style.operation}>
        <TouchableOpacity
          style={style.transfer}
          onPress={() => navigation.navigate('receiver')}>
          <Icon name="arrow-up-outline" color="#608DE2" size={30} />
          <Text style={style.operatText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.topUp}>
          <Icon2 name="plus" color="#608DE2" size={30} />
          <Text style={style.operatText}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <TransHistory navigation={navigation} />
    </View>
  );
};

export default Home;

const innerstyle = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

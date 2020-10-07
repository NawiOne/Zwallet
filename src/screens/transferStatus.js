import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCreator } from '../redux/actions/auth';
import { getSampleHistoryCreator, getHistoryCreator } from '../redux/actions/transaction';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import avatar from '../assets/image/avatar.webp';
import style from '../style/tfStatus';
import Icon from 'react-native-vector-icons/Feather';

import { useRoute } from '@react-navigation/native';

const TransferStatus = ({ navigation }) => {
  const { auth, contact } = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();
  const { amount, notes, date, balance, time } = route.params;

  const formatAmount = new Intl.NumberFormat('de-DE').format(amount);
  const formatBalance = new Intl.NumberFormat('de-DE').format(balance);

  const backAction = () => {
    Alert.alert('', 'Exit app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <View style={style.status}>
        <View style={style.rounded}>
          <Icon name="check" size={40} color="white" />
        </View>
        <Text style={style.textStatus}>Transfer Success</Text>
      </View>
      <View style={style.content}>
        <View style={style.subList}>
          <Text style={style.title}>Amount</Text>
          <Text style={style.item}>Rp{formatAmount}</Text>
        </View>
        <View style={style.subList}>
          <Text style={style.title}>Balance</Text>
          <Text style={style.item}>Rp{formatBalance}</Text>
        </View>
        <View style={style.subList}>
          <Text style={style.title}>Date & Time</Text>
          <Text style={style.item}>
            {date} - {time}
          </Text>
        </View>
        <View style={style.subList}>
          <Text style={style.title}>Notes</Text>
          <Text style={style.item}>{notes}</Text>
        </View>
        <Text style={textStyle.transfer}>Transfer to</Text>
        <View style={style.receiver}>
          <View style={style.contact}>
            <View>
              <Image
                source={
                  contact.oneContact.picture === null
                    ? avatar
                    : { uri: contact.oneContact.picture }
                }
                style={style.imgUser}
              />
            </View>
            <View>
              <Text style={style.name}>{contact.oneContact.username}</Text>
              <Text style={style.num}>{contact.oneContact.phone}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={style.btnContinue}
          onPress={() => {
            navigation.navigate('home');
            dispatch(getUserCreator(auth.data.email));
            dispatch(getHistoryCreator(auth.data.id));
            dispatch(getSampleHistoryCreator(auth.data.id));
          }}>
          <Text style={style.strActive}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TransferStatus;

const textStyle = StyleSheet.create({
  transfer: {
    marginTop: 15,
    marginBottom: 15,
    color: '#514F5B',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import style from '../style/confirmation';
import Icon from 'react-native-vector-icons/Feather';
import {doTransCreator} from '../redux/actions/transaction';

import {useNavigation, useRoute} from '@react-navigation/native';

const Confirmation = () => {
  const contact1 = useSelector((state) => state.contact.oneContact);
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();

  const date = moment().format('MMM D, YYYY');
  const time = moment().format('LT');
  const navigation = useNavigation();
  const route = useRoute();
  const {amount, note} = route.params;
  const leftBalance = auth.dataUser.balance - amount;
  const curency = new Intl.NumberFormat('de-DE').format(leftBalance)
  const curAmount = new Intl.NumberFormat('de-DE').format(amount)

  const handlePress = () => {
    navigation.navigate('enterpin',{
      sender_id: auth.dataUser.id,
      receiver_id: contact1.id,
      trans_name: 'transfer',
      trans_type: 'out',
      amount: amount,
      notes: note,
      date: date,
      balance: leftBalance,
      time: time,
    })
  }

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <View style={style.header}>
        <View style={style.bar}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={style.tabTitle}>Transfer</Text>
        </View>
        <View style={style.contact}>
          <View>
            <Image source={{uri: contact1.picture}} style={style.imgUser} />
          </View>
          <View>
            <Text style={style.name}>{contact1.username}</Text>
            <Text style={style.num}>{contact1.phone}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={style.content}>
        <View style={style.list}>
          <View style={style.left}>
            <Text style={style.title}>Amount</Text>
            <Text style={style.item}>Rp{curAmount}</Text>
          </View>
          <View style={style.right}>
            <Text style={style.title}>Balance Left</Text>
            <Text style={style.item}>Rp{curency}</Text>
          </View>
        </View>
        <View style={style.list}>
          <View style={style.left}>
            <Text style={style.title}>Date</Text>
            <Text style={style.item}>{date}</Text>
          </View>
          <View style={style.right}>
            <Text style={style.title}>Time</Text>
            <Text style={style.item}>{time}</Text>
          </View>
        </View>
        <View style={style.list}>
          <View style={style.note}>
            <Text style={style.title}>Notes</Text>
            <Text style={style.item}>{note}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={style.btnContinue}
          onPress={() => {
            handlePress()
          }}>
          <Text style={style.strActive}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default Confirmation;

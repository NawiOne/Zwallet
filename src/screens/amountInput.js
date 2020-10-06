import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Overlay} from 'react-native-elements';
import style from '../style/amountInput';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const AmountInput = () => {
  const contact1 = useSelector((state) => state.contact.oneContact);
  const {auth} = useSelector((state) => state);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [visible, setVisible] = useState(false);
  const numAmount = Number(amount);
  const curency = new Intl.NumberFormat('de-DE').format(auth.dataUser.balance);
  const navigation = useNavigation();
  const empty = () => {
    if (amount === null || note === '') {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = () => {
    navigation.navigate('confirmation', {
      amount: amount,
      note: note,
    });
  };

  if (amount > auth.dataUser.balance) {
    Alert.alert('Current balance is not enough', null, [
      {
        text: 'Ok',
        // onPress: () => setAmount(''),
      },
    ]);
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
            color="black"
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
      <View style={style.content}>
        <Text style={{fontSize: 17, color: '#7C7895'}}>
          Rp{curency} Available
        </Text>
        <TextInput
          value={amount}
          keyboardType="numeric"
          placeholder="0.00"
          placeholderTextColor="#B5BDCC"
          style={style.inputAmount}
          onChangeText={(num) => {
            setAmount(num);
          }}
        />
        <View style={style.inputContainer}>
          <Icon
            name="edit-2"
            size={18}
            style={style.icon}
            color={note !== '' ? '#6379F4' : '#A9A3A3'}
          />
          <TextInput
            onChangeText={(text) => setNote(text)}
            style={note !== '' ? style.inputNoteActive : style.inputNote}
            placeholder="add some notes"
            value={note}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (!empty()) {
              handleSubmit();
            }
          }}
          style={empty() ? style.btnContinue : style.btnContinueActive}>
          <Text style={empty() ? style.str : style.strActive}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Overlay isVisible={visible}>
        <View>
          <Text>Maximum input</Text>
          <TouchableOpacity
            onPress={() => {
              setAmount('');
            }}>
            <Text>Ok</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </ScrollView>
  );
};

export default AmountInput;

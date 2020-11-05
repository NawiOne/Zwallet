import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { updatePhoneCreator } from '../redux/actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Overlay } from 'react-native-elements';
import style from '../style/transHistory';
import Icon from 'react-native-vector-icons/AntDesign';
import CellPhone from 'react-native-vector-icons/FontAwesome';

const Personal = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [visible, setVisible] = useState(false);
  const userPhone = useSelector((state) => state.auth.dataUser.phone);
  const { dataUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (phone === '') {
      setVisible(!visible);
    } else {
      setVisible(!visible);
      dispatch(updatePhoneCreator(phone, dataUser.email));
    }
  };
  const getname = dataUser.username.split(' ');
  const firstName = getname[0];
  const lastName = () => {
    if (getname.length > 0) {
      return getname[1];
    } else {
      console.log('tidak ada');
    }
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Icon
          name="arrowleft"
          size={25}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={style.tabTitle}>Personal Information</Text>
      </View>
      <View style={innerStyle.content}>
        <Text style={innerStyle.title}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>First Name</Text>
          <Text style={innerStyle.subTitle}>{firstName}</Text>
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Last Name</Text>
          <Text style={innerStyle.subTitle}>{lastName()}</Text>
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Verified E-mail</Text>
          <Text style={innerStyle.subTitle}>{dataUser.email}</Text>
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Phone Number</Text>
          <Text style={innerStyle.subTitle}>{userPhone}</Text>
          <Text
            style={innerStyle.manage}
            onPress={() => {
              setVisible(!visible);
            }}>
            Manage
          </Text>
        </View>
      </View>
      <Overlay
        isVisible={visible}
        overlayStyle={innerStyle.overlay}
        onBackdropPress={() => {
          setVisible(!visible);
        }}>
        <>
          <View style={innerStyle.form}>
            <CellPhone
              name="mobile-phone"
              size={20}
              color="#6379F4"
              style={innerStyle.icon}
            />
            <TextInput
              defaultValue={userPhone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
              style={innerStyle.input}
            />
          </View>

          <TouchableOpacity
            style={innerStyle.save}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={innerStyle.saveText}>Save</Text>
          </TouchableOpacity>
        </>
      </Overlay>
    </View>
  );
};

export default Personal;

const innerStyle = StyleSheet.create({
  content: {
    padding: 20,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40,
    color: '#7A7886',
    fontSize: 16,
  },
  list: {
    backgroundColor: 'white',
    padding: 10,
    height: 75,
    justifyContent: 'space-around',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  listTitle: {
    color: '#7A7886',
    fontSize: 16,
  },
  subTitle: {
    color: '#514F5B',
    fontSize: 22,
    fontWeight: 'bold',
  },
  manage: {
    position: 'absolute',
    right: 10,
    top: '50%',
    color: '#6379F4',
    fontSize: 16,
  },
  overlay: {
    width: '70%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '90%',
    paddingLeft: 30,
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: '30%',
  },
  save: {
    backgroundColor: '#6379F4',
    padding: 10,
    width: 80,
    alignItems: 'center',
    borderRadius: 10,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

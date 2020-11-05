import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import style from '../style/receiver';
import Icon from 'react-native-vector-icons/AntDesign';
import Empty from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactList from '../components/receiver/contactList';
import {
  searchContactCreator,
  getContactCreator,
} from '../redux/actions/contact';

const Receiver = ({ navigation }) => {
  const { auth, contact } = useSelector((state) => state);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  console.log(contact);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      dispatch(getContactCreator(auth.data.id));
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.bar}>
          <Icon
            name="arrowleft"
            size={25}
            color="white"
            onPress={() => {
              dispatch(getContactCreator(auth.data.id));
              navigation.goBack();
            }}
          />
          <Text style={style.tabTitle}>Find Receiver</Text>
        </View>
        <View style={style.searchBar}>
          <Icon name="search1" size={20} color="#A9A9A9" />
          <TextInput
            placeholder="Search receiver here"
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              dispatch(searchContactCreator(name));
            }}
          />
        </View>
      </View>
      <View style={style.content}>
        <View style={style.contactTitle}>
          <TouchableOpacity
            style={style.contentTitle}
            onPress={() => {
              dispatch(getContactCreator(auth.data.id));
            }}>
            <View>
              <Text style={style.contact}>Contacts</Text>
            </View>
            <Text style={style.subTitleContact}>
              {contact.contact.length} Contact Found
            </Text>
          </TouchableOpacity>
        </View>
        {contact.contact.length ? (
          <ContactList navigation={navigation} />
        ) : (
          <Empty
            name="delete-empty"
            color="black"
            size={100}
            style={styiling.empty}
            onPress={() => dispatch(getContactCreator(auth.data.id))}
          />
        )}
      </View>
    </View>
  );
};

export default Receiver;

const styiling = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    marginTop: 40,
  },
});

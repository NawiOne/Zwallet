import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {
  getContactCreator,
  getMoreContactCreator,
  getContactIdCreator,
} from '../../redux/actions/contact';
import style from '../../style/receiver';
import avatar from '../../assets/image/avatar.webp';

const ContactList = ({ navigation }) => {
  const [page, setPage] = useState(2);
  const { auth, contact } = useSelector((state) => state);
  const pageInfo = useSelector((state) => state.contact.pageInfo);
  const dispatch = useDispatch();
  console.log(pageInfo);

  useEffect(() => {
    dispatch(getContactCreator(auth.data.id));
  }, []);

  const getMoreContact = () => {
    console.log('endofreached');
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={style.itemList}
        onPress={() => {
          dispatch(
            getContactIdCreator(
              item.id,
              item.username,
              item.phone,
              item.picture,
            ),
          );
          navigation.navigate('amountinput');
        }}>
        <View style={style.user}>
          {item.picture === null ? (
            <Image source={avatar} style={style.imgList} />
          ) : (
            <Image source={{ uri: item.picture }} style={style.imgList} />
          )}
          <View style={style.userName}>
            <Text style={{ color: '#4D4B57', fontSize: 16 }}>
              {item.username}
            </Text>
            <Text style={{ color: '#7A7886', fontSize: 14 }}>{item.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={contact.contact}
      style={style.flatList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={getMoreContact}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ContactList;

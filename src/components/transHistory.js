import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  getHistoryCreator,
  getSampleHistoryCreator,
} from '../redux/actions/transaction';
import style from '../style/home';
import avatar from '../assets/image/avatar.webp';

const Transhistory = ({ navigation }) => {
  const { auth, transaction } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log(loading);

  useEffect(() => {
    dispatch(getSampleHistoryCreator(auth.data.id));
    dispatch(getHistoryCreator(auth.data.id));
  }, []);

  useEffect(() => {
    if (transaction.isPending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [transaction.isPending]);

  const renderItem = ({ item }) => {
    return (
      <View style={style.itemList}>
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
            <Text style={{ color: '#7A7886', fontSize: 14 }}>
              {item.trans_name}
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          {item.trans_type === 'in' ? (
            <Text style={{ color: '#1EC15F', fontSize: 18 }}>
              +Rp{new Intl.NumberFormat('de-DE').format(item.amount)}
            </Text>
          ) : (
            <Text style={{ color: '#FF5B37', fontSize: 18 }}>
              -Rp{new Intl.NumberFormat('de-DE').format(item.amount)}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={style.transHistory}>
      <View style={style.transHeader}>
        <Text style={{ color: '#514F5B', fontSize: 18 }}>
          Transaction History
        </Text>
        <Text
          style={{ color: '#6379F4', fontSize: 14 }}
          onPress={() => {
            navigation.navigate('transhistory');
          }}>
          See all
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator
          color="black"
          size="large"
          style={innerStyle.loading}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={style.flatList}
          data={transaction.sampleHistory}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
export default Transhistory;

const innerStyle = StyleSheet.create({
  loading: {
    marginTop: 50,
  },
});

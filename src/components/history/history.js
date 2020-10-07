import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SectionList, Image } from 'react-native';
import style from '../../style/transHistory';
import userImg from '../../assets/image/user.jpg';

const Week = () => {
  const history = useSelector((state) => state.transaction.history);
  console.log(history);
  const [data, setData] = useState();
  const renderItem = ({ item }) => {
    return (
      <View style={style.itemList}>
        <View style={style.user}>
          <Image source={userImg} style={style.imgList} />
          <View style={style.userName}>
            <Text style={{ color: '#4D4B57', fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: '#7A7886', fontSize: 14 }}>Transfer</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: '#1EC15F', fontSize: 18 }}>+ Rp.120.000</Text>
        </View>
      </View>
    );
  };

  return (
    <SectionList
      data={data}
      style={style.flatList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Week;

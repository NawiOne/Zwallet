import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import style from '../style/transHistory';
import Icon from 'react-native-vector-icons/AntDesign';
import History from '../components/history/history';

const TransactionHistory = ({navigation}) => {
  const [inCome, setInCome] = useState(false);
  const [expanse, setExpanse] = useState(false);

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
        <Text style={style.tabTitle}>History</Text>
      </View>
      <History />
      <View style={style.bottom}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={inCome ? style.btnActive : style.btn}>
            <Icon
              name="arrowup"
              color={inCome ? 'white' : '#FF5B37'}
              size={30}
              onPress={() => {
                setInCome(!inCome);
                setExpanse(false);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={expanse ? style.btnActive : style.btn}>
            <Icon
              name="arrowdown"
              color={expanse ? 'white' : '#1EC15F'}
              size={30}
              onPress={() => {
                setExpanse(!expanse);
                setInCome(false);
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={style.textBottom}>Filter by Date</Text>
      </View>
    </View>
  );
};

export default TransactionHistory;

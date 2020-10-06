import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getHistoryCreator } from '../redux/actions/transaction';
import { DateTime } from 'luxon';
import style from '../style/transHistory';
import style2 from '../style/home';
import Icon from 'react-native-vector-icons/AntDesign';
import History from '../components/history/history';
import avatar from '../assets/image/avatar.webp';

const startOfTheWeek = DateTime.local().startOf('week').toISODate();
const endOfTheWeek = DateTime.local()
  .startOf('week')
  .plus({ days: 7 })
  .toISODate();
const startOfTheMonth = DateTime.local().startOf('month').toISODate();
const endOfTheMonth = DateTime.local()
  .startOf('month')
  .plus({ days: 30 })
  .toISODate();

const TransactionHistory = ({ navigation }) => {
  const histories = useSelector((state) => state.transaction.history);
  const [inCome, setInCome] = useState(false);
  const [expanse, setExpanse] = useState(false);

  const thisWeek = histories.filter((history) => {
    return (
      DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
        startOfTheWeek &&
      DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheWeek
    );
  });
  const thisMonth = histories.filter((history) => {
    return (
      !thisWeek.includes(history) &&
      DateTime.fromISO(history.date.split(' ')[0]).toISODate() >=
        startOfTheMonth &&
      DateTime.fromISO(history.date.split(' ')[0]).toISODate() <= endOfTheMonth
    );
  });

  const historyData = [
    {
      date: 'This Week',
      data: thisWeek,
    },
    {
      date: 'This Month',
      data: thisMonth,
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View style={style2.itemList}>
        <View style={style2.user}>
          {item.picture === null ? (
            <Image source={avatar} style={style2.imgList} />
          ) : (
            <Image source={{ uri: item.picture }} style={style2.imgList} />
          )}
          <View style={style2.userName}>
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
      <SectionList
        style={innerstyle.sectionList}
        sections={historyData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <RenderItem item={item} />}
        renderSectionHeader={({ section: { date, data } }) =>
          data.length === 0 ? null : (
            <View>
              <Text style={innerstyle.date}>{date}</Text>
            </View>
          )
        }
      />

      <View style={style.bottom}>
        <View style={{ flexDirection: 'row' }}>
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
const innerstyle = StyleSheet.create({
  date: {
    color: '#7A7886',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    fontWeight: 'bold',
  },
});

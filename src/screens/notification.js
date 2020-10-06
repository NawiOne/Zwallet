import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style2 from '../style/enterPIN';

const Notification = ({navigation}) => {
  return (
    <View>
      <View style={style2.header}>
        <View style={style2.bar}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={style2.tabTitle}>Notification</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;

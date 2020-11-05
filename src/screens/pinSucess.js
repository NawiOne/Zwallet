import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { loginCreator, getUserCreator } from '../redux/actions/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../style/auth';
import { useRoute } from '@react-navigation/native';

const PinSuccess = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  console.log(route);
  const { email, password } = route.params;

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <Text style={style.brandNameSuccess}>Zwallet</Text>
      <View style={style.containerPINSuccess}>
        <View style={style.descript}>
          <View style={style.round}>
            <Icon name="check" color="white" size={50} />
          </View>
          <View>
            <Text
              style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>
              PIN successfully Created
            </Text>
            <Text style={style.successText}>
              Your PIN was successfully created and you can now access all the
              features in Zwallet. Login to your new account and start
              exploring!
            </Text>
          </View>
        </View>
        <View style={style.form} />
        <TouchableOpacity
          style={style.loginBtnActive}
          onPress={() => {
            dispatch(loginCreator(email, password));
          }}>
          <Text style={style.loginTextActive}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PinSuccess;

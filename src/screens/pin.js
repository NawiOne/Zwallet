import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserCreator, delUserCreator} from '../redux/actions/auth';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import SmootPinCode from 'react-native-smooth-pincode-input';
import style from '../style/auth';
import {useRoute, useNavigation} from '@react-navigation/native';

const CreatePIN = () => {
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  const {auth} = useSelector((state) => state);
  const navigation = useNavigation();
  const route = useRoute();
  const {email, password} = route.params;
  console.log(email, password);

  useEffect(() => {
    if (auth.status === 200) {
      navigation.reset({
        index: 0,
        routes: [{name: 'pinsuccess'}],
      });
      navigation.navigate('pinsuccess', {email: email, password: password});
    }
  }, [navigation, auth]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Are  you sure to exit', '', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            dispatch(delUserCreator(email));
            navigation.navigate('login');
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  console.log(auth.data.email, Number(pin));
  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <Text style={style.brandName}>Zwallet</Text>
      <View style={style.containerPIN}>
        <View style={style.descript}>
          <Text style={style.header}>Create Secure PIN</Text>
          <Text style={style.subHeader}>
            Create a PIN that's contain 6 digits number for
          </Text>
          <Text style={style.subHeaderPIN}>security purpose in Zwallet.</Text>
        </View>
        <View style={style.formPin}>
          <SmootPinCode
            password={true}
            autoFocus={true}
            codeLength={6}
            value={pin.toString()}
            cellStyle={style.cellPin}
            onTextChange={(text) => setPin(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (pin.length === 6) {
              dispatch(
                updateUserCreator(
                  null,
                  null,
                  Number(pin),
                  null,
                  auth.data.email,
                ),
              );
            }
          }}
          style={
            pin.length !== 6 ? style.loginBtnPIN : style.loginBtnActivePIN
          }>
          <Text
            style={pin.length !== 6 ? style.loginText : style.loginTextActive}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreatePIN;

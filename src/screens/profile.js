import React, { useState, useEffect } from 'react';
import { Overlay } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {
  logoutCreator,
  getUserCreator,
  clearStatusCreator,
  updateUserCreator,
} from '../redux/actions/auth';
import { clearTransCreator } from '../redux/actions/transaction';
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

import style from '../style/profile';
import Icon from 'react-native-vector-icons/Feather';
import imgUser from '../assets/image/avatar.webp';

const Profile = ({ navigation }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSwitch = () => setIsEnabled((f) => !f);

  const handleLogout = () => {
    navigation.navigate('login');
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
    dispatch(logoutCreator());
    dispatch(clearTransCreator());
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const alert = () => {
    Alert.alert(
      'File Too Larger',
      '',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  };
  const handleChoose = () => {
    const options = {
      title: 'select-picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: true,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return null;
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        const source = response;
        if (response.fileSize > 200000) {
          setImage(null);
          alert();
        } else {
          setImage(source);
          setTimeout(() => {
            dispatch(
              updateUserCreator(null, null, null, source, auth.data.email),
            );
          }, 500);
        }
      }
    });
  };

  useEffect(() => {
    if (auth.status === 200 || auth.status === 500) {
      setLoading(false);
      console.log('sucess');
      dispatch(clearStatusCreator());
      setTimeout(() => {
        dispatch(getUserCreator(auth.data.email));
      }, 1000);
    } else if (auth.isPending) {
      setLoading(true);
    }
  }, [auth, dispatch, navigation]);

  return (
    <View style={style.container}>
      <View style={style.tab}>
        <Icon
          name="arrow-left"
          size={30}
          color="#4D4B57"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.profile}>
          {image !== null ? (
            <Image source={image} style={style.imgUser} />
          ) : auth.dataUser.picture !== null ? (
            <Image
              source={{ uri: auth.dataUser.picture }}
              style={style.imgUser}
            />
          ) : (
            <Image source={imgUser} style={style.imgUser} />
          )}
          <TouchableOpacity style={style.edit} onPress={() => handleChoose()}>
            <Icon name="edit-2" color="#7A7886" />
            <Text style={style.editTxt}>Edit</Text>
          </TouchableOpacity>
          <Text style={style.name}>{auth.dataUser.username}</Text>
          <Text style={style.phone}>{auth.dataUser.phone}</Text>
        </View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              navigation.navigate('personal');
            }}>
            <Text style={style.nameOperation}>Personal Information</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              navigation.navigate('changepass');
            }}>
            <Text style={style.nameOperation}>Change Password</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              navigation.navigate('enterchangePIN');
            }}>
            <Text style={style.nameOperation}>Change PIN</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <View style={style.listOperation}>
            <Text style={style.nameOperation}>Notification</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              toggleOverlay();
            }}>
            <Text style={style.nameOperation}>Logout</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* overlay */}
      <Overlay
        overlayStyle={overlayStyle.container}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View>
          <Text style={overlayStyle.title}>Logout?</Text>
          <View style={overlayStyle.btnOperation}>
            <TouchableOpacity
              style={overlayStyle.btnYes}
              onPress={() => {
                handleLogout();
              }}>
              <Text style={overlayStyle.textYes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={overlayStyle.btnNo}
              onPress={toggleOverlay}>
              <Text style={overlayStyle.textNo}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Overlay isVisible={loading} overlayStyle={overlayStyle.loading}>
        <ActivityIndicator
          color="red"
          size="large"
          style={overlayStyle.indicator}
        />
      </Overlay>
    </View>
  );
};

export default Profile;

const overlayStyle = StyleSheet.create({
  container: {
    padding: 20,
    width: '80%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnOperation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btnYes: {
    borderRadius: 12,
    alignItems: 'center',
    padding: 15,
    width: 90,
    backgroundColor: '#6379F4',
  },
  btnNo: {
    borderRadius: 12,
    alignItems: 'center',
    padding: 15,
    width: 90,
    backgroundColor: '#CDCCCC',
  },
  textYes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textNo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backfaceVisibility: 'hidden',
  },
});

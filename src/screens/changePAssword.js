import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  BackHandler,
  StyleSheet,
  Alert,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import style from '../style/changePassword';
import style2 from '../style/enterPIN';
import {
  getPassCreator,
  clearStatusCreator,
  updatePasCreator,
} from '../redux/actions/auth';

const ChangePass = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [pas1, setPas1] = useState('');
  const [pas2, setPas2] = useState('');
  const [pas3, setPas3] = useState('');
  const [msg, setMsg] = useState(null);
  const [msg2, setMsg2] = useState(null);
  const [msg3, setMsg3] = useState(null);
  const [visible, setVisible] = useState(false);
  console.log(msg, msg2, msg3);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Cancel change password?', '', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            dispatch(clearStatusCreator());
            navigation.goBack();
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

  useEffect(() => {
    if (auth.updatePassword === 200) {
      setMsg(null);
      setVisible(!visible);
    } else if (auth.updatePassword === 500) {
      setMsg('password is incorect');
    }
  }, [auth.updatePassword]);

  const empty = () => {
    if (pas1 === '' || pas2 === '' || pas3 === '') {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    if (!empty()) {
      if (!checkPass.test(pas2)) {
        setMsg2(
          'Password must contain at least 1 number, and be longer than 8 charaters.',
        );
      } else if (pas2 !== pas3) {
        setMsg3('password is not matching');
      } else {
        dispatch(updatePasCreator(pas1, pas2, auth.dataUser.email));
      }
    }
  };

  return (
    <View>
      <View style={style2.header}>
        <View style={style2.bar}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            onPress={() => {
              dispatch(clearStatusCreator());
              navigation.goBack();
            }}
          />
          <Text style={style2.tabTitle}>Change Password</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styling.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.descript}>
          <Text style={style.header}>
            You must enter your current password and then type your new password
            twice
          </Text>
        </View>
        {msg !== null ? <Text style={styling.error1}>{msg}</Text> : null}
        <View style={style.inputContainer}>
          <Icon
            name="lock"
            size={18}
            style={style.icon}
            color={pas1 !== '' ? '#6379F4' : '#A9A3A3'}
          />
          <TextInput
            secureTextEntry={show1}
            onChangeText={(text) => setPas1(text)}
            style={style.inputNote}
            placeholder="Current Password"
          />
          <TouchableOpacity style={style.iconLeft}>
            <Icon
              name={show1 ? "eye-off" : "eye"}
              size={18}
              color="#A9A3A3"
              onPress={() => setShow1(!show1)}
            />
          </TouchableOpacity>
        </View>
        <View style={style.inputContainer}>
          <Icon
            name="lock"
            size={18}
            style={style.icon}
            color={pas2 !== '' ? '#6379F4' : '#A9A3A3'}
          />
          <TextInput
            secureTextEntry={show2}
            onChangeText={(text) => {
              setPas2(text);
              setMsg2(null);
              setMsg3(null);
            }}
            style={style.inputNote}
            placeholder="New Password"
          />
          <TouchableOpacity style={style.iconLeft}>
            <Icon
              name={show2 ? "eye-off": "eye"}
              size={18}
              color="#A9A3A3"
              onPress={() => setShow2(!show2)}
            />
          </TouchableOpacity>
        </View>
        {msg2 === null ? null : <Text style={styling.errMesage}>{msg2}</Text>}
        <View style={style.inputContainer}>
          <Icon
            name="lock"
            size={18}
            style={style.icon}
            color={pas3 !== '' ? '#6379F4' : '#A9A3A3'}
          />
          <TextInput
            secureTextEntry={show3}
            onChangeText={(text) => {
              setPas3(text);
              setMsg3(null);
              setMsg2(null);
            }}
            style={style.inputNote}
            placeholder="Repeat Password"
          />
          <TouchableOpacity style={style.iconLeft}>
            <Icon
              name={show3 ? "eye-off" : "eye"}
              size={18}
              color="#A9A3A3"
              onPress={() => setShow3(!show3)}
            />
          </TouchableOpacity>
        </View>
        {msg3 === null ? null : <Text style={styling.errMesage3}>{msg3}</Text>}
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
          style={empty() ? style.loginBtn : style.loginBtnActive}>
          <Text style={empty() ? style2.loginText : style.loginTextActive}>
            Change Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Overlay isVisible={visible} overlayStyle={styling.overlay}>
        <View style={styling.success}>
          <Text style={{fontWeight: 'bold'}}>Success</Text>
          <TouchableOpacity
            style={styling.btnOk}
            onPress={() => {
              setVisible(!visible);
              dispatch(clearStatusCreator());
              navigation.navigate('profile');
            }}>
            <Text style={styling.ok}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default ChangePass;

const styling = StyleSheet.create({
  container: {
    paddingBottom: 130,
  },
  error1: {
    color: 'red',
    position: 'absolute',
    marginTop: '26%',
    alignSelf: 'center',
  },
  errMesage: {
    color: 'red',
    fontSize: 11,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: '70%',
    position: 'absolute',
  },
  errMesage3: {
    color: 'red',
    fontSize: 11,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: '95%',
    position: 'absolute',
  },
  overlay: {
    width: '50%',
    height: '23%',
    alignItems: 'center',
    borderRadius: 10,
  },
  success: {
    paddingTop: 5,
    alignItems: 'center',
  },
  btnOk: {
    backgroundColor: '#6379F4',
    top: 40,
    alignItems: 'center',
    padding: 10,
    width: 70,
    borderRadius: 10,
  },
  ok: {
    color: 'white',
    fontWeight: 'bold',
  },
});

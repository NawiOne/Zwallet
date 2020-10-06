import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { persistor, store } = configureStore();

// screen
import Home from './src/screens/home';
import Login from './src/screens/login';
import SignUp from './src/screens/signUp';
import CreatePIN from './src/screens/pin';
import PinSuccess from './src/screens/pinSucess';
import TransHistory from './src/screens/transHistory';
import Receiver from './src/screens/searchReceiver';
import AmountInput from './src/screens/amountInput';
import Confirmation from './src/screens/confirmation';
import EnterPIN from './src/screens/enterPIN';
import TfStatus from './src/screens/transferStatus';
import Profile from './src/screens/profile';
import ChangePass from './src/screens/changePAssword';
import EnterChangePIN from './src/screens/enterCurrentPIN';
import NewPIN from './src/screens/newPIN';
import Notification from './src/screens/notification';
import SplashScreen from './src/screens/spalshScreen';
import ChangePIN from './src/screens/changePIN';
import EnterEmail from './src/screens/enterEmail';
import RessetPassword from './src/screens/resetPassword';
import Personal from './src/screens/personalInfo';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="home"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="signup"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="createpin"
                component={CreatePIN}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="pinsuccess"
                component={PinSuccess}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="enteremail"
                component={EnterEmail}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="resetpassword"
                component={RessetPassword}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="transhistory"
                component={TransHistory}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="receiver"
                component={Receiver}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="amountinput"
                component={AmountInput}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="confirmation"
                component={Confirmation}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="enterpin"
                component={EnterPIN}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="changepin"
                component={ChangePIN}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="transferstatus"
                component={TfStatus}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="personal"
                component={Personal}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="changepass"
                component={ChangePass}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="enterchangePIN"
                component={EnterChangePIN}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="newPIN"
                component={NewPIN}
                options={{
                  title: 'Change PIN',
                  headerTransparent: true,
                }}
              />
              <Stack.Screen
                name="notification"
                component={Notification}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

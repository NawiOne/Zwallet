import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';

const ModalOverlay = () => {
  return (
    <Overlay overlayStyle={style.container}>
      <View>
        <Text>overlay</Text>
      </View>
    </Overlay>
  );
};
export default ModalOverlay;

const style = StyleSheet.create({
  container: {
    width: '50%',
  },
});

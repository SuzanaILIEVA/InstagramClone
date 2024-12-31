import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Dot = () => {
  return <View style={styles.box} />;
};

export default Dot;

const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: colors.RED,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.WHITE,
    borderRadius: 5,
    position: 'absolute',
    top: 1,
    left: 16,
  },
});

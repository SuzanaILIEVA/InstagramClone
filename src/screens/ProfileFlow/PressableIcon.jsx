import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AddUser} from '../../assets/icons';
import {colors} from '../../constants/colors';

const PressableIcon = () => {
  return (
    <TouchableOpacity style={styles.icon}>
      <AddUser />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 40,
    backgroundColor: colors.GREY,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

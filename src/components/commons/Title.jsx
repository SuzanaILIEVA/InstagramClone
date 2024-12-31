import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export const titleType = {
  TEXT_14_700: 'TEXT_14_700',
  TEXT_14_400: 'TEXT_14_400',

  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_20_700: 'TEXT_20_700',

  DEFAULT: 'default',
  TEXT_22_700_40: 'TEXT_22_700_40',
};
const Title = ({theme = 'default', text}) => {
  return <Text style={styles[theme]}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  default: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 18,
  },
  TEXT_12_400_18: {
    color: colors.BLUE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  TEXT_20_700: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '700',
  },
  TEXT_22_700_40: {
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 40,
  },
  TEXT_14_700: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '700',
  },
  TEXT_14_400: {
    color: colors.TEXT_COLOR,
    fontSize: 14,
    fontWeight: '400',
  },
});

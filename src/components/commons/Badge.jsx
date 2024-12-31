import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Title, {titleType} from './Title';

const Badge = ({value, customStyle}) => {
  return (
    <View style={[styles.badge, customStyle]}>
      <Title theme={titleType.DEFAULT} text={value} />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.RED,
    padding: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

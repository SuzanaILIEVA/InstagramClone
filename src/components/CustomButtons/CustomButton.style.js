import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default {
  primary: StyleSheet.create({
    background: {
      backgroundColor: colors.BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
      marginHorizontal: 12,
    },
    text: {
      color: colors.WHITE,
      fontSize: 18,
      fontWeight: 'bold',
    },
  }),

  outline: StyleSheet.create({
    background: {
      backgroundColor: colors.GREY,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
      marginHorizontal: 6,
      flex: 1,
    },
    text: {
      color: colors.BLACK,
      fontSize: 18,
      fontWeight: 'bold',
    },
  }),
};

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronBack,
  ChevronDown,
  Drawer,
  Heart,
  HorizontalDots,
  InstaLogo,
  Messanger,
  NotificationBell,
  OfficialIcon,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import {routes} from '../../constants/routes';
import Title, {titleType} from './Title';

const Header = ({screenName, isMyProfile}) => {
  const {FEED_POST, PROFILE_FLOW} = routes;
  return (
    <View style={styles.header}>
      {screenName === FEED_POST ? (
        <View style={styles.leftBox}>
          <InstaLogo />
          <ChevronDown />
        </View>
      ) : isMyProfile ? (
        <View style={styles.leftBox}>
          <Title text={'My Profile'} theme={titleType.TEXT_22_700_40} />
          <Badge value={'10+'} />
        </View>
      ) : (
        <ChevronBack />
      )}
      {screenName == PROFILE_FLOW && isMyProfile === false && (
        <View style={styles.middle}>
          <Title text={'username'} theme={titleType.TEXT_20_700} />
          <OfficialIcon />
        </View>
      )}

      {screenName === FEED_POST ? (
        <View style={styles.rightBox}>
          <Heart />
          <Dot />
          <Messanger />
          <Badge value={'10'} customStyle={styles.badge} />
          <AddFeeds />
        </View>
      ) : isMyProfile ? (
        <View style={styles.rightBox}>
          <AddFeeds />
          <Drawer />
        </View>
      ) : (
        <View style={styles.rightBox}>
          <NotificationBell />
          <HorizontalDots />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rightBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  badge: {
    position: 'absolute',
    left: 66,
    top: -6,
    zIndex: 999,
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

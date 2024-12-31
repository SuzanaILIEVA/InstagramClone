import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routes';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import {colors} from '../../constants/colors';
import CustomButton from '../../components/CustomButtons/CustomButton';
import PressableIcon from './PressableIcon';
import SavedIGstories from './SavedIGstories';
import TabNaviBar from './TabNaviBar';

export const source =
  'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=99/56107/uploads/blog/buyumeyen-kopek-cinsleri-ve-ozellikleri-9a2e.jpg';

const tabList = ['Posts', 'Reels', 'User'];
const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View>
      <Header screenName={routes.PROFILE_FLOW} isMyProfile={true} />

      <View style={styles.userProfileData}>
        <Avatar image={source} />

        <View style={styles.data}>
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'5,234'} title={'Followers'} />
          <ProfileData value={'7,234'} title={'Following'} />
        </View>
      </View>

      {/**userinfo */}
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.category}>Category/Genre Text</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consecte adipisicing elit. Minus facere,
            in fugit aliquam.
          </Text>
          <Text style={styles.link}>Link goes here</Text>
        </View>
      </View>

      {/* followers */}
      <View style={styles.followers}>
        <View style={styles.middleimgContainer}>
          <Image
            source={{uri: source}}
            style={[styles.middleimg, {position: 'absolute', left: 50}]}
          />
          <Image
            source={{uri: source}}
            style={[styles.middleimg, {position: 'absolute', left: 25}]}
          />
          <Image
            source={{uri: source}}
            style={[styles.middleimg, {position: 'absolute', left: 1}]}
          />
        </View>

        <View style={styles.followersRight}>
          <Text style={styles.normalText}>Followed by </Text>
          <Text style={styles.boldText}>Username ,</Text>
          <Text style={styles.boldText}>Username </Text>
          <Text style={styles.normalText}>and </Text>
          <Text style={styles.boldText}>100 Others</Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.buttons}>
        <CustomButton title={'Follow'} theme={'primary'} />
        <View style={styles.rowButtons}>
          <CustomButton title={'Message'} theme={'outline'} />
          <CustomButton title={'Subscribe'} theme={'outline'} />
          <CustomButton title={'Contact'} theme={'outline'} />
          <PressableIcon />
        </View>
      </View>

      {/* stories */}
      <SavedIGstories />

      {/* tabNaviBar */}
      <TabNaviBar
        tabList={tabList}
        activeBar={activeTab}
        setActiveBar={setActiveTab}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userProfileData: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  data: {
    flexDirection: 'row',
    gap: 20,
  },
  userInfo: {
    paddingHorizontal: 12,
    // paddingBottom: 10,
    paddingTop: 6,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.BLACK,
  },
  category: {
    color: colors.GRAY,
    marginBottom: 5,
    fontSize: 16,
  },
  description: {
    color: colors.BLACK,
    marginBottom: 5,
    fontSize: 14,
  },
  link: {
    color: colors.DARK_BLUE,
    fontWeight: 'bold',
    fontSize: 16,
  },
  middleimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.WHITE,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  followers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
  },
  middleimgContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followersRight: {
    flexDirection: 'row',
    flex: 2,
    flexWrap: 'wrap',
    marginTop: 10,
    alignItems: 'center',
  },
  normalText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 16,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 16,
  },
  buttons: {
    paddingVertical: 10,
    gap: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';
import {StoryRingGrey} from '../../assets/icons';

const Avatar = ({image, isSaved}) => {
  return (
    <View style={styles.avatar}>
      {isSaved ? <StoryRingGrey /> : <StoryRing />}

      <Image
        source={{uri: image}}
        style={[styles.image, isSaved && styles.isSavedSize]}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    width: 75,
    height: 75,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isSavedSize: {
    width: 55,
    height: 55,
  },
});

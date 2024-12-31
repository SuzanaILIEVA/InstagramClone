import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routes';

const FeedPostScreen = () => {
  return (
    <View>
      <Header screenName={routes.FEED_POST} />
      <Text>FeedPostScreen</Text>
    </View>
  );
};

export default FeedPostScreen;

const styles = StyleSheet.create({});

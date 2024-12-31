import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TabNaviBar = ({tabList, activeBar, setActiveBar}) => {
  console.log(tabList, activeBar, setActiveBar);

  return (
    <View>
      {tabList?.map((item, index) => (
        <TouchableOpacity onPress={() => setActiveBar(index)}>
          <Text key={index}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNaviBar;

const styles = StyleSheet.create({});

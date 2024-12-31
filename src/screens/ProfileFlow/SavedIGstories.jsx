import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import {storyList} from '../../constants/dummyData';

const SavedIGstories = () => {
  return (
    <View style={styles.savedIG}>
      <FlatList
        data={storyList}
        renderItem={({item, index}) => (
          <View key={index} style={styles.story}>
            <Avatar image={item.storyImg} isSaved={true} />
            <Text style={styles.storyText}> {item.storyDesc}</Text>
          </View>
        )}
        horizontal
        ItemSeparatorComponent={<View style={{width: 18}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SavedIGstories;

const styles = StyleSheet.create({
  savedIG: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    gap: 5,
  },
  story: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    letterSpacing: -0.4,
    paddingVertical: 3,
  },
});

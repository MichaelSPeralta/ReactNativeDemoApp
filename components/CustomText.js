import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({name}) => {
  return <Text style={styles.text}>{name}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default CustomText;

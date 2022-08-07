import React from 'react';
import {StyleSheet, View} from 'react-native';

const InputWrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 25,
  },
});

export default InputWrapper;

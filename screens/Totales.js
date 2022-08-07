import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFirebase} from '../hooks/useFirebase'

const Totales = () => {
  const data = useFirebase();

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Totales</Text>
      {
        console.log('data----------',data)
      }
      <Text style={{fontFamily: 'normal'}}>  data </Text>
        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>     
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
  }
});

export default Totales;

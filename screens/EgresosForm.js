import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Form from '../components/Form';

const Egresos = () => {
    return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Form collection='egresos'/>
          </View>
        </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
  
  });
  
  export default Egresos;
  
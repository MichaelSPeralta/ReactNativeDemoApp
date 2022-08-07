import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Form from '../components/Form';

const Ingresos = () => {
    return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Form collection='ingresos'/>
          </View>
        </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
  
  });
  
  export default Ingresos;
  
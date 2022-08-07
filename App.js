import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} >
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

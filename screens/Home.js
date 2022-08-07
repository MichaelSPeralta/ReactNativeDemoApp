import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Separator() {
  return <View style={styles.separator} />;
}

const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>REGISTRAR</Text>
      <View style={styles.icons}>
        <Icon.Button
          size={50}
          style={styles.icon}
          name="plus"
          backgroundColor="green"
          onPress={() => {
            navigation.navigate('Ingresos');
          }}
        />
        <Icon.Button
          size={50}
          style={styles.icon}
          name="minus"
          backgroundColor="red"
          onPress={() => {
            navigation.navigate('Egresos');
          }}
        />
      </View>    
      <Separator />
      <Separator />
      <Text style={styles.text}>DETALLE</Text>
      <View style={styles.icons}>
        <Icon.Button
          size={50}
          style={styles.icon}
          name="plus"
          backgroundColor="green"
          onPress={() => {
            navigation.navigate('Ingresos Detalle');
          }}
        />
        <Icon.Button
          size={50}
          style={styles.icon}
          name="minus"
          backgroundColor="red"
          onPress={() => {
            navigation.navigate('Egresos Detalle');
          }}
        />
      </View>
      <Separator />
      <Button
        title="Totales"
        onPress={() => {
          navigation.navigate('Totales');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  separator: {
    marginVertical: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 20,
    margin: 20,
  },
  text: {
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black',
    fontWeight: '600',
    letterSpacing: 6,
    textDecorationLine: 'underline',
    fontFamily: 'Roboto',
    fontSize: 20
  }
});

export default Home;

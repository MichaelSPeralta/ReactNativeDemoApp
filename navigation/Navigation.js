import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IngresosForm from '../screens/IngresosForm';
import EgresosForm from '../screens/EgresosForm';
import Home from '../screens/Home';
import EgresosDetalle from '../screens/EgresosDetalle';
import IngresosDetalle from '../screens/IngresosDetalle';
import Totales from '../screens/Totales';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Egresos"
            component={EgresosForm}
            options={{title: 'Egresos'}}
          />
          <Stack.Screen
            name="Ingresos"
            component={IngresosForm}
            options={{title: 'Ingresos'}}
          />
          <Stack.Screen
            name="Egresos Detalle"
            component={EgresosDetalle}
            options={{title: 'Egresos Detalle'}}
          />
          <Stack.Screen
            name="Ingresos Detalle"
            component={IngresosDetalle}
            options={{title: 'Ingresos Detalle'}}
          />
          <Stack.Screen
            name="Totales"
            component={Totales}
            options={{title: 'Totales'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    
});

export default Navigation;

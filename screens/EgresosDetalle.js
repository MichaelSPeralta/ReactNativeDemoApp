import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TouchableHighlight} from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import {getEgresos} from '../services/api';

const EgresosDetalle = () => {
  const [egresos, setEgresos] = useState({});

  async function getData() {
    try {
      await firestore()
        .collection('egresos')
        .get()
        .then(querySnapshot => {
          // console.log('Total egresos: ', querySnapshot.size);
          let list = [];

          querySnapshot.forEach(documentSnapshot => {
            list.push({
                id: documentSnapshot.id,
                ...documentSnapshot.data()
            });
          });

          setEgresos(list);
        });
    } catch (error) {
      console.log(error);
    }
  }

const fnDelete = (id) => {
   
        firestore()
        .collection('egresos')
        .doc(id)
        .delete()
        .then(() => {
          console.log('Egreso Borrado!');
          getData()
        });

}

  const renderList = list => {
    return (
      <View style={styles.listContainer}>
        <Text>Lista de Gastos</Text>
        {Object.keys(list).map((key, index) => {
          return (
            <View style={styles.list} key={key}>
              <Text>{`${list[key].Detalle}: $${list[key].Monto} `}</Text>
              <TouchableHighlight 
                style ={styles.delete}>
              <Button color='red' title='Borrar' onPress={()=> fnDelete(list[key].id)}></Button>
                </TouchableHighlight>
            </View>
          );
        })}
      </View>
    );
  };

  const egresosTotal = list => {
    let total = 0;

    Object.keys(list).map((key, index) => {
      total += Number(`${list[key].Monto}`);
    });

    return total;
  };

//   const filterByKey = () => {
//     Object.keys(egresos).
//     filter((key) => key.includes('Detalle')).
//     reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});
//   }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <Button color='orange' title="Amor, si no carga datos, toca aca!" onPress={getData} />
      <Text style={styles.total}>{`Total Egresos: $${egresosTotal(egresos)}`}</Text>
      {renderList(egresos)}
      {/* <Button title="filterByKey" onPress={filterByKey} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    listContainer: {
      },
    list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  total: {
    padding: 20
  },
  delete:{
    padding: 2,
        height: 40,
        width: 100,
        borderRadius:10,
        // marginLeft :50,
        // marginRight:50,
        // marginTop :20,
        justifyContent: 'center',
        alignItems: 'center'
        // flexWrap: 'nowrap',
        // alignContent: 'flex-end',
  }
});

export default EgresosDetalle;

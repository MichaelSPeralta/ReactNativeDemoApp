import firestore from '@react-native-firebase/firestore';

const getIngresos = firestore()
  .collection('ingresos')
  .get()
  .then(querySnapshot => {
    console.log('Total ingresos: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('Ingreso ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

export const getEgresos = () => firestore()
  .collection('egresos')
  .get()
  .then(querySnapshot => {
    console.log('Total egresos: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('Egreso ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

const filter = firestore()
  .collection('egresos')
  .where('detalle', '==', 'despensa')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      console.log('Filtro: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

const filterByDate = firestore()
.collection('egresos')
.orderBy('fecha', 'desc')
.get()
.then(querySnapshot => {
  querySnapshot.forEach(documentSnapshot => {
    console.log('Filtro por fecha: ', documentSnapshot.id, documentSnapshot.data());
  });
});

const filterByAmount = firestore()
.collection('egresos')
.orderBy('monto', 'desc')
.get()
.then(querySnapshot => {
  querySnapshot.forEach(documentSnapshot => {
    console.log('Filtro por monto: ', documentSnapshot.id, documentSnapshot.data());
  });
});

export const add = (data, collection) => firestore()
.collection(collection)
.add(data)
.then(() => {
  console.log(`Agregaste con exito a ${collection} un nuevo registro!`);
});


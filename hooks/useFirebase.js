import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const useFirebase = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getIngresos();
  }, []);

  async function getIngresos() {
    try {
      await firestore()
        .collection('ingresos')
        .get()
        .then(querySnapshot => {
          //   console.log('Total ingresos: ', querySnapshot.size);
          let list = [];

          querySnapshot.forEach(documentSnapshot => {
            list.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });

          setData({
            ...data,
            ingresos: list,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  return data;
};

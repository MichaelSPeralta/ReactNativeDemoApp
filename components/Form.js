import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Modal,
  Button,
  Text,
  TextInput,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CustomText from './CustomText';
import {add} from '../services/api';
import InputWrapper from './InputWrapper';

const getDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today;
};

const Form = ({collection}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    Detalle: '',
    Monto: '',
    Fecha: getDate(),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: formValues,
  });

  function onSubmit(data) {
    add(data, collection);
    setModalVisible(true);
  }

  const isNumber = number => !isNaN(number);

  return (
    <View style={{paddingHorizontal: 16}}>
      <InputWrapper>
        <CustomText name="Detalle" />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Campo requerido.'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Detalle"
        />
        {errors.Detalle && <Text>{errors.Detalle.message}</Text>}
      </InputWrapper>

      <InputWrapper>
        <CustomText name="Monto" />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Por favor ingresa numeros.'},
            minLength: {value: 1, message: 'Min Length'},
            maxLength: {value: 6, message: 'Max Length'},
            validate: isNumber,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Monto"
        />
        {errors.Monto && <Text>{errors.Monto.message}</Text>}
      </InputWrapper>

      <InputWrapper style={{display:'none'}}>
        <CustomText name="Fecha" />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Fecha"
        />
      </InputWrapper>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>
              {`Añadido con exito!`}
            </Text>
            <Text style={styles.modalText}>
              {`Detalle: ${control._formValues.Detalle}, Monto: ${control._formValues.Monto}, `}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Form;

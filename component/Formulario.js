import React, {useState} from 'react';
import {Text, StyleSheet, View , TouchableHighlight, TextInput, Button, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas,setCitas,setmostrarForm}) =>{

    const [paciente,guardarPaciente] = useState('');
    const [propietario,guardarPropietario] = useState('');
    const [telefono,guardarTelefono] = useState('');
    const [sintoma,guardarSintoma] = useState('');
    const [fecha,guardarFecha] = useState('');
    const [hora,guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {

      const opciones ={year:'numeric',month: 'long' , day: '2-digit'};
      guardarFecha(date.toLocaleDateString('es-ES',opciones));

      console.warn("A date has been picked: ", date);
      hideDatePicker();

    };
// BOTON PARA HORA
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
    const confirmarHora = (hora) => {
        console.log(hora)
       const opciones ={ hour: 'numeric', minute: '2-digit' };
       console.log(hora.toLocaleTimeString("en-US",opciones))
       guardarHora(hora.toLocaleTimeString("en-US",opciones));
       
       console.warn("A date has been picked: ", hora);
       hideTimePicker();
      };


//Crear Nuevas Citas
    const crearNuevaCita = () =>{

        if(paciente.trim() === "" ||propietario.trim() === "" || telefono.trim() === "" || fecha.trim() === ""
        || hora.trim ==="" || sintoma.trim() === ""){
            console.log("Algo fallo")
            mostrarVentana();
            return;
        }

        //Crear nueva cita
        const cita = {paciente,propietario,telefono,fecha,hora,sintoma}
        cita.id = shortid.generate();
        // console.log(cita)
        const citasNuevas = [...citas,cita];
        setCitas(citasNuevas);

        //Ocular formular
        setmostrarForm(false);
        //Resetear formulario


    }      

    const mostrarVentana = () =>{
        Alert.alert(
            'Error', // Titulo
            'Todo los campos son obligatorios', // Mensaje
            [{
                text: 'OK' // Arreglo de botones
            }],
        
        )
    }

//RENDER    
    return(
        <ScrollView style = {style.formulario}>
            <View>
                <Text style = {style.label}>Paciente: </Text>
                <TextInput 
                    style = {style.input}
                    onChangeText = {texto => guardarPaciente(texto)}
                />
            </View>

            <View>
                <Text style = {style.label}>Dueño: </Text>
                <TextInput 
                    style = {style.input}
                    onChangeText = {texto => guardarPropietario(texto)}
                />
            </View>

            <View>
                <Text style = {style.label}>Numero telefono: </Text>
                <TextInput 
                    style = {style.input}
                    onChangeText = {texto => guardarTelefono(texto)}
                    keyboardType = 'numeric'
                />
            </View>


            <View>
                <Text style ={style.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale = 'es_ES'
                />
                <Text>{fecha}</Text>
            </View>

            <View>
                <Text style ={style.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                />
            <Text>{hora}</Text>    
            </View>

            <View>
                <Text style = {style.label}>Sintoma: </Text>
                <TextInput 
                    style = {style.input}
                    multiline
                    onChangeText = {texto => guardarSintoma(texto)}
                />
            </View>

            <View>
                <TouchableHighlight onPress = {()=>crearNuevaCita()} style = {style.btnAgregar}>
                    <Text style = {style.textoAgregar}>AGREGAR</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
        

    );
}

const style = StyleSheet.create({

    formulario:{
        backgroundColor : '#FFF',
        paddingHorizontal: 20,
        paddingVertical : 5,
        marginHorizontal : '2.5%'
    },

    label:{
        fontWeight: 'bold',
        fontSize : 18,
        marginTop: 20,
        
    },
    
    input:{
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth : 1,
        borderStyle: 'solid',
        
    },

    btnAgregar: {
        padding: 10,
        backgroundColor : 'red',
        marginVertical : 10
    },
    
    textoAgregar: {
        color : '#FFF',
        fontWeight : 'bold',
        textAlign : 'center'
    }
})

export default Formulario;
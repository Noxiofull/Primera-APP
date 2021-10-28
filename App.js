/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {Text, StyleSheet, View, FlatList,TouchableHighlight,Platform,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Cita from './component/Cita'
import Formulario from './component/Formulario';


const App =() => {
 
const [mostrarForm,setmostrarForm] = useState(false);
  
const [citas,setCitas] = useState([
  {id:1, paciente:"Hook", propietario:"Juan", sintoma:"No come"},
  {id:2, paciente:"Redux", propietario:"Itzel", sintoma:"No bebe"},
  {id:3, paciente:"Native", propietario:"Josue", sintoma:"No Canta"},
])

  const eliminarPaciente= id =>{
    setCitas((citasActuales) =>{
      return citasActuales.filter(cita => cita.id !== id);
    })
  }

//Mostrar Formulario u ocultarlo
const mostrarFormulario = () =>{
  setmostrarForm(!mostrarForm);
}
//Ocultar teclado
const cerrarTeclado = () =>{
  Keyboard.dismiss();
}

  return (
   <TouchableWithoutFeedback onPress = {()=> cerrarTeclado()}>
     <View style={style.contenedor}>
      <Text style = {style.titulo}>Administrador de Citas</Text>

      <TouchableHighlight onPress = {()=>mostrarFormulario()} style = {style.btnAgregar}>
        <Text style = {style.textoAgregar}>{mostrarForm ? " Cancelar cita" : "Crear nueva cita"}</Text>
       </TouchableHighlight>

      <View style = {style.contenido}>

        {mostrarForm ?(
          <>
          <Text style = {style.titulo}>Crear nueva cita</Text>

          <Formulario
          citas = {citas}
          setCitas = {setCitas}
          setmostrarForm = {setmostrarForm}
          />
          </>
        ):(
          <>
          <Text style = {style.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas disponibles'}</Text>
          <FlatList
            style = {style.listado}
            data = {citas}
            renderItem = {({item})=>(
              <Cita
                item = {item}
                eliminarPaciente = {eliminarPaciente}
              />
            
            )}

            keyExtractor = {cita => cita.id}
          />
         </>  
        )}
        
       
{/* NO OLVIDAR PREGUNTAR ESTO  */}
      
      </View>

   </View>
   </TouchableWithoutFeedback>
   
  );
};

const style = StyleSheet.create({
  
  titulo:{
    textAlign: 'center',
    marginTop: Platform.OS === "ios" ? 40: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },

  contenedor:{
    backgroundColor: '#AA076B',
    flex:1
  },

  contenido : {
    flex: 1,
    marginHorizontal : '2.5%',
  },

  listado: {
    flex:1
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


export default App;

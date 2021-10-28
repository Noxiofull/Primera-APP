import React from 'react';
import {Text, StyleSheet, View , TouchableHighlight} from 'react-native';

const Cita  =({item,eliminarPaciente})=>{

    const dialogoEliminar  = (id) =>{
        console.log("Eliminando .....",id)
        eliminarPaciente(id);
    } 
    return(  
        <View style = {style.cita}>
            <View>
                <Text style = {style.label}>Paciente: </Text>
                <Text style = {style.texto}>{item.paciente}</Text>
            </View> 
            <View>
                <Text style = {style.label}>Propietario: </Text>
                <Text style = {style.texto}>{item.propietario}</Text>
            </View> 
            <View>
                <Text style = {style.label}>Sintoma: </Text>
                <Text style = {style.texto}>{item.sintoma}</Text>
            </View> 

            
            <View>
                <TouchableHighlight onPress = {()=> dialogoEliminar(item.id)} style = {style.btnEliminar}>
                    <Text style = {style.textoEliminar}>ELIMINAR</Text>
                </TouchableHighlight>
            </View>
        </View>

        
    );
}

const style = StyleSheet.create({
    cita:{
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth : 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    label:{
        fontWeight : 'bold',
        fontSize : 18 ,
        marginTop : 20
    },

    texto:{
        fontSize: 18
    },

    btnEliminar: {
        padding: 10,
        backgroundColor : 'red',
        marginVertical : 10
    },
    
    textoEliminar: {
        color : '#FFF',
        fontWeight : 'bold',
        textAlign : 'center'
    }
})

export default Cita;
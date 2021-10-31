/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Alert, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function redes(props) {
    function handleRedeSocial(){
        switch(props.nome){
            case "linkedin": Alert.alert('Meu Linkedin:', 'https://www.linkedin.com/in/gabriel-martins-spinola/');
            break;
            case"facebook": Alert.alert('Meu Facebook:', 'https://www.facebook.com/MartinsSpN');
            break;
            case "github": Alert.alert('Meu Github:', 'https://github.com/martinsspn/');
            break;
        }
      }
    return (
        <>
        <TouchableOpacity onPress={()=> handleRedeSocial()}>
            <Icon name={props.nome} size={30}/>
        </TouchableOpacity>
        </>
    );
}

export default redes;

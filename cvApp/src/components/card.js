/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({titulo, children}) => {

  return (
    <View style={style.card_container}>
    <View style={style.card}>
      <View style={style.card_header}>
        <Text style={style.card_title}>{titulo}</Text>
      </View>
      <View style={style.card_content}>
        {children}
      </View>
    </View>
    </View>
  );
};

const style = StyleSheet.create({
    card:{
      width:'70%',
      borderRadius: 5,
      borderWidth:1,
      borderColor: '#939393',
      padding:10,
      backgroundColor:'#FFF',
    },
    card_container:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop: 20,
    },
    card_content:{
      marginTop:20,
      alignItems: 'center',
      justifyContent:'center',
    },
    card_content_text:{
      color:"#939393",
      marginBottom:10,
      alignItems: 'center',
      justifyContent:'center',
    },
    card_header:{
      fontWeight:'bald',
      alignItems:'center',
      justifyContent:'center',
    },
    card_title:{
      fontWeight: 'bold',
    },
  });

export default Card;

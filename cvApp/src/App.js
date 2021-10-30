/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import foto from './assets/pp.jpeg';
import Icon from 'react-native-vector-icons/Feather'

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case'Linkedin': Alert.alert('Meu Linkedin:', 'https://www.linkedin.com/in/gabriel-martins-spinola/');
      break;
      case'Facebook': Alert.alert('Meu Facebook:', 'https://www.facebook.com/MartinsSpN');
      break;
      case'Github': Alert.alert('Meu Github:', 'https://github.com/martinsspn/');
      break;
    }
  }
  return (
    <>
     <View style={style.page}>
       <View style={style.container_cabecalho}> 
         <Image source={foto} style={style.foto}/>
         <Text style={style.nome}>Gabriel Martins Spínola</Text>
         <Text style={style.funcao}>Desenvolvedor FullStack</Text>
         <View style={style.redes_sociais}>
          <TouchableOpacity onPress={()=> handleRedeSocial("Github")}>
            <Icon name="github" size={30} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=> handleRedeSocial("Facebook")}>
            <Icon name="facebook"size={30}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=> handleRedeSocial("Linkedin")}>
            <Icon name="linkedin"size={30}/>
           </TouchableOpacity>
         </View>
       </View>
       
       <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
          <Text>Experiencia Profissional</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>Em busca do primeiro trabalho</Text>
          </View>
        </View>
       </View>

       <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
          <Text>Formação Acadêmica</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>Bacharelado em Tecnologia da Informação</Text>
            <Text style={style.card_content_text}>Bacharelado em Ciência da Computação(em andamento)</Text>
            <Text style={style.card_content_text}>Ensino Médio</Text>
          </View>
        </View>
       </View>
       
     </View>
    </>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho:{
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius:125
  },
  nome:{
    fontSize: 26,
    fontWeight: 'bold',
    marginTop:10
  },
  funcao:{
    color:'#939393',
    marginBottom:10
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTio:20
  },
  card:{
    width:'60%',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#939393',
    padding:10,
    backgroundColor:'#FFF'
  },
  card_container:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20
  },
  card_content:{
    marginTop:20,
    alignItems: 'center',
    justifyContent:'center'
  },
  card_content_text:{
    color:"#939393",
    marginBottom:10,
    alignItems: 'center',
    justifyContent:'center'
  },
  card_header:{
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default App;

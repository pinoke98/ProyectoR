import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";

export default class olvCont extends Component{

    
    constructor(props){
        super(props); 
        this.state ={ 
          codigo:'',
          enlace:global.enlace,
         estadoingresar:'' // para mostrar mensaje de error 
        }
       }
       

        verificar (){ 
fetch(`http://${this.state.enlace}:3307/obtenercodigocorreo/${global.correo}`)  
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    dataSource: responseJson
  });
  // aqui ocurre la verificación 
  if (this.state.dataSource.length != 0 ){ // quiere decir que almenos encontro un registro
  if ( this.state.codigo==this.state.dataSource[0].Codigo ){
    // si los datos son correctos 
this.setState({codigo:''});
this.setState({estadoingresar:''});
this.props.navigation.navigate('varChangePass');// navegacion al home de la app

  } else {
      
    this.setState({estadoingresar:'Upps!! That´s not the code we sent'});
  }
} else {
  this.setState({estadoingresar:'Upps!! Something is bad.. '});
}
}


)
.catch((error) =>{
  console.error(error);
});
        }
    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require("../../Images/Logo.png")}
                    />
                </View>
                
                    <View style={styles1.con}>
                        <StatusBar
                        barStyle="dark-content"
                        />
                        <Text>{this.state.estadoingresar }</Text>
                        <TextInput 
                        placeholder="Code"
                        value ={this.state.codigo}
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="join"
                        keyboardType= "number-pad"
                        onChangeText={(text) => this.setState({codigo:text})}
                        style={styles1.input}
                        />



                        <View style={styles2.container}>
                                    <View style={styles2.buttonContainer}>
                                        <TouchableOpacity 
                        style={styles1.Button} 
                        onPress = {() => { 
                            this.props.navigation.navigate('varOlvCont');
                        } }
                        > 
                            <Text style={styles1.ButtonText}>  Go back. </Text>
                        </TouchableOpacity> 
  
                                </View>
                                    <View style={styles2.buttonContainer}>
                                    <TouchableOpacity 
                        style={styles1.Button} 
                        onPress = {() => { 
                            this.verificar();  
                        } }
                        > 
                            <Text style={styles1.ButtonText}>Confirm code</Text>
                            </TouchableOpacity>
                                        </View>
                                                   
                            </View>


                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles2= StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },
    buttonContainer: {
    flex: 1,
    }
    });

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#FFFFFF"
    },
    logoContainer:{
        justifyContent:"center",
        flexGrow:1,
        alignItems:"center",
    },
    logo:{
        width:157/2,
        height:141/2
    },
    formContainer:{
        paddingBottom:15
    }
});

const styles1=StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        height:40,
        backgroundColor:"rgba(189, 195, 199,0.4)",
        borderRadius:16,
        marginBottom:15,
        color:"#FFF",
        paddingHorizontal:10
    },
    Button:{
        alignItems:"center",
        justifyContent:"center",
        height:40,
        borderRadius:16,
        backgroundColor:"#fa8231"
    },
    ButtonText:{
        textAlign:"center",
        color:"#FFFFFF",
        fontWeight:'800'
    },
    signupButton:{
        marginTop:5,
        flexDirection:"row",
        paddingHorizontal:10
    },
    text:{
        color:"#000000",
        opacity:0.6
    },
    textsignUp:{
        color:"#000000",
        opacity:0.7,
        fontWeight:"800"
    }
});
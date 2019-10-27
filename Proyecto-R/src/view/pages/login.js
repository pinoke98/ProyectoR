import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";


global.enlace ="192.168.32.1";

export default class Login extends Component{
 
    constructor(props){
             super(props); 
           global.usuario = ''; // en esta variable ira el usuario actual en una sesion
             this.state ={ 
               usuario:'',
               contraseña:'',
               enlace:global.enlace,
              estadoingresar:'' // para mostrar mensaje de error 
             }
            }


             verificar (){ 
                 if (this.state.usuario != "" ||this.state.contraseña != "" ){
   fetch(`http://${this.state.enlace}:3307/obtenerusuario/${this.state.usuario}`)  
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         dataSource: responseJson
       });
       // aqui ocurre la verificación 
       if (this.state.dataSource.length != 0 ){ // quiere decir que almenos encontro un registro
       if ( this.state.usuario==this.state.dataSource[0].Usuario && this.state.contraseña==this.state.dataSource[0].Contraseña){
         // si los datos son correctos 

   global.usuario=this.state.usuario;
   this.setState({contraseña:''});
   this.setState({usuario:''});
   this.setState({estadoingresar:''});
   this.props.navigation.navigate('varMap');// navegacion al home de la app

       } else {
           
         this.setState({estadoingresar:'Upps!! Something it´s not right.'});
       }
     } else {
    
       this.setState({estadoingresar:'Upps!! Something it´s not right.'});
     }
     }
  
  
     )
     .catch((error) =>{
       console.error(error);
    });
             }
            }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                   
                   source= {require("../../Images/Logo.png")}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>

                <View style={styles1.container}>
                <StatusBar
                barStyle="dark-content"
                />


<Text style={styles1.text}> {this.state.estadoingresar}</Text>

                <TextInput 
                value ={this.state.usuario}
                placeholder="Username"
                placeholderTextColor="rgba(87, 96, 111,1.0)"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles1.input}
                onChangeText={(text) => this.setState({usuario:text})}
                />
                <TextInput 
                value ={this.state.contraseña}
                placeholder="Password"
                placeholderTextColor="rgba(87, 96, 111,1.0)"
                secureTextEntry
                returnKeyType="join"
                style={styles1.input}
                onChangeText={(text) => this.setState({contraseña:text})}
                
                />
                <TouchableOpacity 
                style={styles1.Button} 
                onPress = {() => { 
                    this.verificar();
                 } }
                > 
                    <Text style={styles1.ButtonText}>LOGIN</Text>
                </TouchableOpacity>

                

                <View style={styles1.signupButton}>
                    <Text style={styles1.text}>You don´t have an account?</Text>
                    <TouchableOpacity onPress = {() => {
                      this.props.navigation.navigate('varSingUp');
                      } }>
                        <Text style={styles1.textsignUp}> SignUp!</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles1.signupButton}>
                    <Text style={styles1.text}>Forgot Password?</Text>
                    <TouchableOpacity onPress = {() => {
                      this.props.navigation.navigate('varOlvCont');
                      } }>
                        <Text style={styles1.textsignUp}> Recorver it here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
                    



                </KeyboardAvoidingView>
            </View>
        );
    
}
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    logoContainer:{
        justifyContent:"center",
        flexGrow:1,
        alignItems:"center",
    },
    logo:{
        width:157,
        height:141
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
        color:"#000",
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


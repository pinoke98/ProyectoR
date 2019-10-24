import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";

export default class changePass extends Component{

    constructor(props){
        super(props); 
        this.state ={ 
          contraseña1:'',
          contraseña2:'',
          enlace:global.enlace,
         estadoingresar:'' // para mostrar mensaje de error 
        }
       }

       verificar (){

        if(this.state.contraseña1 != this.state.contraseña2){
            this.setState({estadoingresar:"Upps! That´s not the same password..."});
        } else if(this.state.contraseña1=="" || this.state.contraseña2==""){
            this.setState({estadoingresar:"Upps! Something bas is happening, check the passwords"});
        }
     else {
            fetch(`http://${this.state.enlace}:3307/cambiarcontrasena/${global.correo}/${this.state.contraseña1}`) ;
            this.props.navigation.navigate('varMap');// navegacion al home de la app
       }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require("../../Images/Logo.png")}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                    <View style={styles1.container}>
                        <StatusBar
                        barStyle="dark-content"
                        />

                        <Text>{this.state.estadoingresar}</Text>
                        <TextInput 
                        placeholder="Password"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        onChangeText={(text) => this.setState({contraseña1:text})}
                        secureTextEntry
                        style={styles1.input}
                        />
                        <TextInput 
                        placeholder="Verify Password"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        secureTextEntry
                        returnKeyType="join"
                        style={styles1.input}
                        onChangeText={(text) => this.setState({contraseña2:text})}
                        />

                       
                        <View style={styles2.container}>
                                    <View style={styles2.buttonContainer}>
                                        <TouchableOpacity 
                        style={styles1.Button} 
                        onPress = {() => { 
                            this.props.navigation.navigate('varLogIn');
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
                            <Text style={styles1.ButtonText}>Confirm Password</Text>
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
        backgroundColor:"#FFFFFF",
        padding:20
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
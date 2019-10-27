import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";



export default class olvCont extends Component{
    constructor(props){
        super(props); 
        this.state ={ 
          correo:'',
          enlace:global.enlace,
         estadoingresar:'' // para mostrar mensaje de error 
        }
       }

       enviarcorreo(){
           if (this.state.correo!=""){
           global.correo=this.state.correo;
        fetch(`http://${this.state.enlace}:3307/enviarcorreo/${this.state.correo}`)  
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          });

          if (this.state.dataSource==-1){
            this.setState({
                estadoingresar:"That email is not on use."
              })
          } else {
            this.setState({correo:''});
            this.setState({mensaje:''});
            this.props.navigation.navigate('varGetCode');
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
            <View style={styles1.container}>
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
                        placeholder="Email"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={this.state.correo}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({correo:text})}
                        style={styles1.input}
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
                            this.enviarcorreo();
                        } }
                        > 
                            <Text style={styles1.ButtonText}>Send Code</Text>
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
        fontWeight:'800',
         padding:20
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


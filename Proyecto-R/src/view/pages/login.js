import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";

export default class Login extends Component{
 
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
                <TextInput 
                placeholder="Username or Email"
                placeholderTextColor="rgba(87, 96, 111,1.0)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles1.input}
                />
                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(87, 96, 111,1.0)"
                secureTextEntry
                returnKeyType="join"
                style={styles1.input}
                ref={(input)=>this.passwordInput = input}
                />







<TouchableOpacity 
                style={styles1.Button} 
                onPress = {() => { 
                    this.props.navigation.navigate('varOlvCont');
                    
                 } }
                > 
                    <Text style={styles1.ButtonText}>LOGIN</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                style={styles1.Button} 
                onPress = {() => { 
                    this.props.navigation.navigate('varGetCode');
                    
                 } }
                > 
                    <Text style={styles1.ButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles1.Button} 
                onPress = {() => { 
                    this.props.navigation.navigate('varChangePass');
                    
                 } }
                > 
                    <Text style={styles1.ButtonText}>LOGIN</Text>
                </TouchableOpacity>







                <TouchableOpacity 
                style={styles1.Button} 
                onPress = {() => { 
                    this.props.navigation.navigate('varMap');
                    
                 } }
                > 
                    <Text style={styles1.ButtonText}>LOGIN</Text>
                </TouchableOpacity>


                <View style={styles1.signupButton}>
                    <Text style={styles1.text}>You don´t have an account?</Text>
                    <TouchableOpacity onPress = {() => {
                      this.props.navigation.navigate('varSingUp');
                      } }>
                        <Text style={styles1.textsignUp}> SignUp</Text>
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







//  export default class LogIn extends Component { 

//   constructor(props){
//     super(props); 
//     global.usuario = ''; // en esta variable ira el usuario actual en una sesion
//     global.usuarioadm = ''; // en esta variable ira el usuario actual en una sesion
//     this.state ={ 
//       usuario:'',
//       contraseña:'',
//       enlace:'192.168.0.105',
//       estadoingresar:'' // para mostrar mensaje de error 
      
//   }
// }

// verificar (){ 
//   fetch(`http://${this.state.enlace}:4646/obtenerusuario/${this.state.usuario}`)  
//     .then((response) => response.json())
//     .then((responseJson) => {
//       this.setState({
//         isLoading: false,
//         dataSource: responseJson
//       });
//       // aqui ocurre la verificación 
//       if (this.state.dataSource.length != 0 ){ // quiere decir que almenos encontro un registro
//       if ( this.state.usuario==this.state.dataSource[0].Usuario && this.state.contraseña==this.state.dataSource[0].Contra){
//         // si los datos son correctos 
  
  
//   global.usuario=this.state.usuario;
//   global.usuarioadm=this.state.dataSource[0].UsuarioADM;
//   this.setState({contraseña:''});
//   this.setState({usuario:''});
//   this.setState({estadoingresar:''});
//   this.props.navigation.navigate('varHome');// navegacion al home de la app

//       } else {
//         this.setState({estadoingresar:'Upps!! Algo no está bien.'});
//       }
//     } else {
//       this.setState({estadoingresar:'Upps!! Algo no está bien.'});
//     }
//     }
  
  
//     )
//     .catch((error) =>{
//       console.error(error);
//     });



  
// }

//   render() {

//       return(
//       <ScrollView >
//         <View style={{ flex: 1 }}>
          
//         <View style={StyleSheet.titles}>
//           <Text style={{textAlign: 'center',}} > INICIAR SESIÓN </Text>
//         </View>
//         <Text></Text>
//         <View style={StyleSheet.styleNormal}>
//        <TextInput
//                autoCorrect={ false } 
//                style={StyleSheet.fields}
//                placeholder="Nombre de Usuario"
//                value={String(this.state.usuario)}
//                returnKeyLabel = {"next"}
//               onChangeText={(text) => this.setState({usuario: text})}
//             />
//             <Text></Text>
//             <TextInput
//                 autoCorrect={ false } 
//                 style={StyleSheet.fields}
//                 placeholder="Contraseña"
//                 returnKeyLabel = {"next"}
//                 value={String(this.state.contraseña)}
//                 onChangeText={(text) => this.setState({contraseña:text})}
//                secureTextEntry={true}
//             />
// <Text></Text>
//              <TouchableOpacity  onPress={() => {
//             this.verificar();
//           }} style={StyleSheet.button}>
//              <Icon name="check" size={20} color="#FFFFFF" />
//                <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>  Entrar </Text>
//              </TouchableOpacity>

//              <Text >{this.state.estadoingresar} </Text>
//              </View>

//              </View>

//              </ScrollView>
//     );
//   }
// }



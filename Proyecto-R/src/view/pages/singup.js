import React, { Component } from "react";
import { Scrollview,TextInput, Text, View, TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView,Picker} from "react-native";


 

export default class Singup extends Component{
    constructor(props){
        super(props);

        this.state ={
            iusuario:'',
            nombre:'',
            apellido:'',
            email:'',
            contraseña1:'',
            contraseña2:'',
            genero:'',
            ubicacion:'',
            enlace:global.enlace,
            pickerSelecton:"Default",
            mensaje:""
        }
    }

  
    finalizarresgistro(){
        global.usuario = this.state.iusuario;
        
        if (this.state.contraseña1 != this.state.contraseña2){
            this.setState({mensaje:"That´s not the same password..."});
        } else if (this.state.iusuario1=="" || 
        this.state.nombre==""|| this.state.apellido==""|| this.state.email==""|| 
        this.state.contraseña1==""|| this.state.contraseña2==""|| this.state.genero==""||
         this.state.ubicacion==""){
            this.setState({mensaje:"There are still empty fields..."});

        } else {
           
            fetch(`http://${this.state.enlace}:3307/nuevousuario`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    iusuario:this.state.iusuario,
                    nombre:this.state.nombre,
                    apellido:this.state.apellido,
                    email:this.state.email,
                    contraseña:this.state.contraseña1,
                    genero:this.state.genero,
                    ubicacion:this.state.ubicacion
                }),
              })
              .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         dataSource: responseJson
       });
       // aqui ocurre la verificación 
       if (this.state.dataSource==-1){ // quiere decir que almenos encontro un registro con usuario o correo repetido
      this.setState({mensaje:"This username or email are already on use."});
     } else {
        this.props.navigation.navigate('varSingUp2');
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
            <ScrollView>
            <View >
                <KeyboardAvoidingView behavior="padding" >
                    <View style={styles.logoContainer}>
                    <Image style={styles.logo} 
                   source={require("../../Images/Logo.png")}
                     />
                    </View>
                    
                        <View style={styles.form}>
                            
                                
                                    <TextInput
                                    key="1"
                                    style={styles.input}
                                    placeholder="What´s your first name?"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    onChangeText={(text)  => this.setState({nombre:text})}
                                    />
                                    <TextInput
                                    key="lastName"
                                    style={styles.input}
                                    placeholder="What´s your last name?"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="name"
                                    onChangeText={(text)  => this.setState({apellido:text})}
                                    />
                                    <TextInput
                                    key="2"
                                    style={styles.input}
                                    placeholder="Pick a cool nickname"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    onChangeText={(text)  => this.setState({iusuario:text})}
                                    />
                                    
                                    <TextInput
                                    key="3"
                                    style={styles.input}
                                    placeholder="Enter your Email"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="email-address"
                                    autoCompleteType="email"
                                    onChangeText={(text)  => this.setState({email:text})}
                                    />
                                    <TextInput
                                    key="4"
                                    style={styles.input}
                                    placeholder="Create a safe password"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="go"
                                    secureTextEntry
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    onChangeText={(text)  => this.setState({contraseña1:text})}
                                    />
                                    <TextInput
                                    key="5"
                                    style={styles.input}
                                    placeholder="Confirm your password"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="go"
                                    secureTextEntry
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    onChangeText={(text)  => this.setState({contraseña2:text})}
                                    />
                                    <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.genero}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({genero: itemValue})
                                    }>
                                    <Picker.Item label="" value=""/>
                                    <Picker.Item label="Hombre" value="H" />
                                    <Picker.Item label="Mujer" value="M" />
                                    <Picker.Item label="Otro" value="O" />
                                    </Picker>  



                                    <Picker 
                                    mode="dropdown"
                                    selectedValue={this.state.ubicacion}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ubicacion: itemValue})
                                    }>
                                    <Picker.Item label="" value=""/>
                                    <Picker.Item label="Colombia" value="Col"/>
                                    <Picker.Item label="Portugal" value="Por"/>
                                    <Picker.Item label="Puerto Rico" value="PR"/>
                                    
                                    </Picker>

                                    <Text>{this.state.mensaje}</Text>

                                    <View style={styles1.container}>
                                    <View style={styles1.buttonContainer}>
                                        <TouchableOpacity 
                        style={styles.Button} 
                        onPress = {() => { 
                            this.props.navigation.navigate('varLogIn');
                        } }
                        > 
                            <Text style={styles.ButtonText}>  Go back. </Text>
                        </TouchableOpacity> 
  
                                </View>
                                    <View style={styles1.buttonContainer}>
                                    <TouchableOpacity
                                    style={styles.Button}
                                    onPress={ () =>{
                                        this.finalizarresgistro ();
                                    }
                                    }>                       
                                        <Text style={styles.ButtonText}>  Finish SignUp  </Text>                         
                                    </TouchableOpacity>
                                        </View>
                                                   
                            </View>
                        </View>
                    
                </KeyboardAvoidingView>
            </View>
            </ScrollView>
        )
    }
}



const styles1= StyleSheet.create({
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

const styles=StyleSheet.create({
    container:{
        padding:20,
        justifyContent:"center",
        alignContent:"center"
    },
    logoContainer:{
        justifyContent:"center",
        flexGrow:1,
        alignItems:"center",
        paddingTop:10,
        paddingBottom:40
    },
    form:{
        justifyContent:"center",
        flexGrow:1,
        alignItems:"center",
        
        
    },
    logo:{
        width:110,
        height:100
    },
    input:{
        height:40,
        width:370,
        backgroundColor:"rgba(189, 195, 199,0.4)",
        borderRadius:16,
        marginBottom:15,
        color:"#000",
        paddingHorizontal:10,
        
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

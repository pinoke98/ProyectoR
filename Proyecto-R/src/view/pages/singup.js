import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView,Picker} from "react-native";


 

export default class Singup extends Component{
    constructor(props){
        super(props);
        this.state ={
            pickerSelection:"Default"
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="150">
                    <View style={styles.logoContainer}>
                    <Image style={styles.logo} 
                   source={require("../../Images/Logo.png")}
                     />
                    </View>
                    <ScrollView>
                        <View style={styles.form}>
                            
                                
                                    <TextInput
                                    key="1"
                                    style={styles.input}
                                    placeholder="What´s your first name?"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    />
                                    <TextInput
                                    key="lastName"
                                    style={styles.input}
                                    placeholder="What´s your last name?"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    />
                                    <TextInput
                                    key="2"
                                    style={styles.input}
                                    placeholder="Pick a cool nickname"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    autoCompleteType="email"
                                    />
                                    
                                    <TextInput
                                    key="3"
                                    style={styles.input}
                                    placeholder="Enter your Email"
                                    placeholderTextColor="rgba(87, 96, 111,1.0)"
                                    returnKeyType="next"
                                    keyboardType="email-address"
                                    autoCompleteType="email"
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
                                    />
                                    <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.pickerSelection}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({pickerSelection: itemValue})
                                    }>
                                    <Picker.Item label="Hombre" value="H" />
                                    <Picker.Item label="Mujer" value="M" />
                                    <Picker.Item label="Otro" value="O" />
                                    </Picker>    
                                    <Picker 
                                    mode="dropdown"
                                    selectedValue={this.state.pickerSelection}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({pickerSelection: itemValue})
                                    }>
                                    <Picker.Item label="Colombia" Value="Col"/>
                                    <Picker.Item label="Portugal" Value="Por"/>
                                    <Picker.Item label="Puerto Rico" Value="PR"/>
                                    
                                    </Picker>

                                    <TouchableOpacity
                                    style={styles.Button}
                                    onPress={ () =>{
                                        this.props.navigation.navigate('varMap')
                                    }
                                    }>                       
                                        <Text style={styles.ButtonText}>Finalizar registro</Text>                         
                                    </TouchableOpacity>                        
                            
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

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
        color:"#FFF",
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


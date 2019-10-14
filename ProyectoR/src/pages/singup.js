import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";

 

export default class Singup extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View >
               

                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                <TouchableOpacity 
                style={styles.Button} 
                onPress = {() => {  this.props.navigation.navigate('varMap');} } > 
                    <Text style={styles.ButtonText}>Ir al mapa</Text>
                </TouchableOpacity>
                <Text > Aqui va el registro :D </Text>
</KeyboardAvoidingView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
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


import React, {Component} from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from "react-native";
import "react-navigation";

export default class Form extends Component{
    render(){
        return(
            <View style={styles.container}>
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
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(87, 96, 111,1.0)"
                secureTextEntry
                returnKeyType="join"
                style={styles.input}
                ref={(input)=>this.passwordInput = input}
                />
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.signupButton}>
                    <Text style={styles.text}>You don´t have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.children.n}>
                        <Text style={styles.textsignUp}> SignUp</Text>
                    </TouchableOpacity>
                </View>
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
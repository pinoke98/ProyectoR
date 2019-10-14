import React, {Component} from "react";
import {StyleSheet,View, Image, Text,KeyboardAvoidingView} from "react-native";
import Form from "../components/Form"

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require("../Images/Logo.png")}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                    <Form/>
                </KeyboardAvoidingView>
            </View>
        )
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

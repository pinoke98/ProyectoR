import React,{Component} from "react";
import {View, StyleSheet,Image, TouchableOpacity,Text, KeyboardAvoidingView } from "react-native";
import SForm from "../components/SForm"


export default class SignUp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.logoContainer}>
                        <Image
                        style={styles.logo}
                        source={require("../Images/Logo.png")}
                        />
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                    <SForm/>
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
        paddingTop:45,
        justifyContent:"flex-start",
        flexGrow:1,
        alignItems:"center",
    },
    logo:{
        width:167/3,
        height:150/3
    },
    title:{
        color:"#FFF",
        marginTop:10,
        width:160,
        textAlign:"center",
        opacity:0.8
    },
    formContainer:{
        padding:10,
        paddingBottom:15
    },
    Botton:{
        height:40,
        width:40,
        backgroundColor:"red",
        flexDirection:"row"
    }
});

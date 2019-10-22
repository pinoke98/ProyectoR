import React, { Component } from "react";
import { TextInput, Text, View, StatusBar,TouchableOpacity, ActivityIndicator, Alert ,ScrollView,StyleSheet,Image,KeyboardAvoidingView} from "react-native";

export default class olvCont extends Component{
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
                    <View style={styles1.con}>
                        <StatusBar
                        barStyle="dark-content"
                        />
                        <TextInput 
                        placeholder="Code"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="join"
                        keyboardType= "number-pad"
                        style={styles1.input}
                        />
                        <TouchableOpacity 
                        style={styles1.Button} 
                        onPress = {() => { 
                            this.props.navigation.navigate(' ');  
                        } }
                        > 
                            <Text style={styles1.ButtonText}>Confirm code</Text>
                        </TouchableOpacity>
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
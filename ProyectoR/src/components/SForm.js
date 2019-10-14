import React, {Component} from "react";
import {View,StyleSheet,TextInput,TouchableOpacity,Text} from "react-native";

export default class SForm extends Component{
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        textContentType="location"
                        autoCapitalize="words"
                        onSubmitEditing={()=>this.LastNameInput.focus()}
                        autoCorrect={false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        autoCapitalize="words"
                        onSubmitEditing={() => this.UserInput.focus()}
                        autoCorrect={false}
                        style={styles.input}
                        ref={(input)=>this.LastNameInput = input}
                    />
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.EmailInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                        ref={(input)=>this.UserInput = input}
                    />
                    <TextInput 
                        placeholder="E-mail"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={styles.input}
                        ref={(input)=>this.EmailInput = input}
                    />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        secureTextEntry
                        onSubmitEditing={() => this.CpasswordInput.focus()}
                        returnKeyType="next"
                        style={styles.input}
                        ref={(input)=>this.passwordInput = input}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        placeholderTextColor="rgba(87, 96, 111,1.0)"
                        secureTextEntry
                        returnKeyType="join"
                        style={styles.input}
                        ref={(input)=>this.CpasswordInput = input}
                    />
                </View>
                <View style={styles.nextButtoncontainer}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.textnextButton}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
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
    nextButtoncontainer:{
        marginTop: 50,
        paddingLeft:220,
        marginRight:20
    },
    nextButton:{
        height: 40, 
        borderRadius: 16,
        justifyContent:"center",
        paddingHorizontal:10,
        alignItems:"center",
        backgroundColor:"#fa8231",
    },
    textnextButton:{
        color:"#FFFFFF",
        opacity:0.7,
        fontWeight:"800",
        justifyContent:"center",
        alignItems:"center"   
    }
});
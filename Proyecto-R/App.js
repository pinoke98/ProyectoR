import React, { Component } from 'react';
import { StyleSheet,View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation'; 
import { createDrawerNavigator,DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';



import login from './src/pages/login';
import singup from './src/pages/singup';   // imports para hacer la navegacion entre pantallas.
import map from './src/pages/map';

class NavigationDrawerStructure extends Component {  // Para poder mostar el menu deslizable
   
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
 };

  
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
        <Icon name="bars" color='black' size={30} ></Icon> 
        </TouchableOpacity>
      </View>
    );
  }
}

var a = 0;
var b = 1;
var c = 0;
var d = 1;
var e = 0;


const elementA = (props) =>{
  if (a==0){
    return(
<TouchableOpacity onPress={() =>{
  console.warn ("holasas");
  props.navigation.navigate('varSingUp');

  }}>
    <Text > A</Text>
</TouchableOpacity>

    )
  } 
}

const elementB= () =>{
  if (b==0){
    return(
<TouchableOpacity onPress={() =>{
  console.warn ("holasas");
  }}>
    <Text > B</Text>
</TouchableOpacity>

    )
  } 
}
const elementC = () =>{
  if (c==0){
    return(
<TouchableOpacity onPress={() =>{
  console.warn ("holasas");
  }}>
    <Text > C</Text>
</TouchableOpacity>

    )
  } 
}
const elementD = () =>{
  if (d==0){
    return(
<TouchableOpacity onPress={() =>{
  console.warn ("holasas");
  }}>
    <Text > D</Text>
</TouchableOpacity>

    )
  } 
}
const elementE= () =>{
  if (e==0){
    return(
<TouchableOpacity onPress={() =>{
  console.warn ("holasas");
  }}>
    <Text > E</Text>
</TouchableOpacity>

    )
  } 
}


const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View  style ={ { height : 150  }}>
  <Image
  source= {require ('./src/Images/Logo.png')}
  />
    </View>      
      <DrawerNavigatorItems {...props} />
      <View >
                    { elementA(props)}
                    { elementB()}
                    { elementC()}
                    { elementD()}
                    { elementE()}

                </View>

    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const StackLogIn= createStackNavigator({
  varLogIn: {
    screen: login,
  }
},
  {initialRouteName:'varLogIn'}
);

const StackSingUp= createStackNavigator({
  varSingUp: {
    screen: singup
    }
  },

  {initialRouteName:'varSingUp'}
);




const StackMap= createStackNavigator({
  varMap: {
    screen: map,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        height: 40
      },
      headerTitle: (
      <View > 
        <Text>Proyecto R</Text>
      </View>
      ),
      }),
    }
  },
  {initialRouteName:'varMap'}
);

const DrawerNavigator = createDrawerNavigator({ // aqui van las opciones del menu deslizable 
 
  LogIn: {
    screen: StackLogIn,
    navigationOptions: {
    drawerLabel: 'Log In',
    drawerIcon: <Icon name="home" size={20} color="black" />,
    activeTintColor: '#6B3DA1'
    }
  },
 
  SingUp: {
    screen: StackSingUp,
    navigationOptions: {
    drawerLabel: 'Sing up',
    drawerIcon: <Icon name="home" size={20} color="black" />,
    }
  },
  

  Map: {
   screen: StackMap,
   navigationOptions: {
   drawerLabel: 'Mapa',
   drawerIcon: <Icon name="home" size={20} color="black" />,
   }
},

//aqui van mas opciones para el menu deslizable

},
{

contentComponent : CustomDrawerContentComponent

});

export default createAppContainer(DrawerNavigator);
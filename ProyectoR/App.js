
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {createAppContainer} from 'react-navigation'; 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';



import login from './src/pages/login';
import singup from './src/pages/singup';   // imports para hacer la navegacion entre pantallas.
import map from './src/pages/map';
import form from './src/components/form';

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

const StackLogIn= createStackNavigator({
  varLogIn: {
    screen: login,
  },  varForm : {
    screen: form
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
        // backgroundColor: '#rgb(190, 152, 221);',
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
    // drawerIcon: <Icon name="home" size={20} color="#6B3DA1" />,
    activeTintColor: '#6B3DA1'
    }
  },
 
  SingUp: {
    screen: StackSingUp,
    navigationOptions: {
    drawerLabel: 'Sing up',
    // drawerIcon: <Icon name="home" size={20} color="#6B3DA1" />,
    // activeTintColor: '#6B3DA1'
    }
  },
  

  Map: {
   screen: StackMap,
   navigationOptions: {
   drawerLabel: 'Mapa',
   // drawerIcon: <Icon name="home" size={20} color="#6B3DA1" />,
   // activeTintColor: '#6B3DA1'
   }
},

//aqui van mas opciones para el menu deslizable

});

export default createAppContainer(DrawerNavigator);
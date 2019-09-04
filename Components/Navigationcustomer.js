import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Home from './Home';
import Services from './Services';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Aboutus from './Aboutus';

//import ProfileCompany from '../Container/profileCompany';
//import SettingsCompany from '../Container/settingCompany';


const nagivationcustomer = createBottomTabNavigator({
    Services:{
        screen: Services,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                <Icon2 name="profile" color={tintColor} size={24}/>
            )
            
        }
    },
    Home: {
        screen:Home,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                   <Icon name="ios-home" color={tintColor} size={24}/>
            )

        }
    },
    Aboutus: {
        screen:Aboutus,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                   <Icon name="exclamation-circle" type="solution" color={tintColor} size={24}/>
            )

        }
    },
  
    // AddUser: {
    //     screen: Services,
    //     navigationOptions: {
    //         tabBarIcon:({tintColor})=>(
    //                <Icon2 name="adduser" color={tintColor} size={24}/>
    //         )

    //     }
    // },
    // Profile:{
    //     screen: Personmenu,
    //     navigationOptions: {
    //         tabBarIcon:({tintColor})=>(
    //                <Icon2 name="user" color={tintColor} size={24}/>
    //         )

    //     }
    // },              
  


},{
   tabBarOptions:{
       activeTintColor:'#212121',
       inactiveTintColor:'#424242',
       activeBackgroundColor:'#efebe9',
       inactiveBackgroundColor:'White',
       safeAreaInset: {bottom: 'never', top: 'never'}
   }
});

export default nagivationcustomer;
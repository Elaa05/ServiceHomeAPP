import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import History from './History';
import Handymanprofil from './Handymanprofil';
 import Request from './Request';
import Profilehandymandetails from './Profilehandymandetails';
//import Personmenu from './Personmenu'

import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/AntDesign'
import Services from './Services';
import Personmenu from './Personmenu';
//import ProfileCompany from '../Container/profileCompany';
//import SettingsCompany from '../Container/settingCompany';


const tabNavigator = createBottomTabNavigator({
    Request: {
        screen: Request,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                   <Icon name="ios-home" color={tintColor} size={24}/>
            )

        }
    },
    // Request: {
    //     screen: Request,
    //     navigationOptions: {
    //         tabBarIcon:({tintColor})=>(
    //                <Icon4 name="plus" color={tintColor} size={24}/>
    //         )

    //     }
    // },
    Profile: {
        screen: Profilehandymandetails,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                   <Icon3 name="user" color={tintColor} size={24}/>
            )

        }
    },
    History:{
        screen: History,
        navigationOptions: {
            tabBarIcon:({tintColor})=>(
                <Icon2 name="calendar" color={tintColor} size={24}/>
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

export default tabNavigator
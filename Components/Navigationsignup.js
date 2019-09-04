import React, { Component } from 'react';
import { createMaterialTopTabNavigator,createAppContainer ,createStackNavigator} from 'react-navigation';


import FormCustomer from './FormCustomer';
import Formhandyman from './Formhandyman';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Aboutus from './Aboutus';

//import ProfileCompany from '../Container/profileCompany';
//import SettingsCompany from '../Container/settingCompany';


const navigationsignup = createMaterialTopTabNavigator({
    Customer:{
        screen: FormCustomer
        // navigationOptions: {
        //     tabBarIcon:({tintColor})=>(
        //         <Icon2 name="profile" color={tintColor} size={24}/>
        //     )
            
        // }
    },
    Handyman: {
        screen:Formhandyman
        // navigationOptions: {
        //     tabBarIcon:({tintColor})=>(
        //            <Icon name="ios-home" color={tintColor} size={24}/>
        //     )

        // }
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
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#757575',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        },
      
});

export default navigationsignup;
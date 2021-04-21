import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import{AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import settingScreen from '../screens/settingScreen'

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    Setting:{
        screen: settingScreen
    },
},

    {
        contentcomponent : CustomSideBarMenu
    },


    {
        initialRouteName:'Home'
    
})
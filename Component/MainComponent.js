import React, {Component} from 'react';
import { Text, View} from 'react-native' 
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import NewPassword from './CreateNewPassword';




const SavedPassNavigator = createStackNavigator({
    NewPassword:{
        screen: NewPassword
    },
    initialRouteName:'NewPassword'
})

const AppContainer = createAppContainer(SavedPassNavigator)

class Main extends Component {
    state = {  }
    render() { 
        return ( <View><AppContainer/></View> );
    }
}
 

export default AppContainer;



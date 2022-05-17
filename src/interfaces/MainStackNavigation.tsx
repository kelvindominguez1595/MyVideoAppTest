import React from 'react'
import { View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from '../views/SplashScreen';
import { LoginScreen } from '../views/LoginScreen';
import { HomeScreen } from '../views/HomeScreen';
import { DetailsScreen } from '../views/DetailsScreen';
import { SearchScreen } from '../views/SearchScreen';

const MainStack = createNativeStackNavigator();

export const MainStackNavigation = () => {

  const {Navigator, Screen} = MainStack;
  return (
    <Navigator>
        <Screen name='HomeScreen' component={SplashScreen} />
        <Screen name='LoginScreen' component={LoginScreen} />
        <Screen name='HomeScreen' component={HomeScreen} />
        <Screen name='DetailsScreen' component={DetailsScreen} />
        <Screen name='SearchScreen' component={SearchScreen} />
    </Navigator>
  )
}

import React, { useContext } from 'react'
import { View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from '../views/SplashScreen';
import { LoginScreen } from '../views/LoginScreen';
import { HomeScreen } from '../views/HomeScreen';
import { DetailsScreen } from '../views/DetailsScreen';
import { SearchScreen } from '../views/SearchScreen';
import { AuthContext } from '../components/Context/AuthContext';

const MainStack = createNativeStackNavigator();

export const MainStackNavigation = () => {

  const {status} = useContext(AuthContext);
  const {Navigator, Screen} = MainStack;

  if(status == 'wait') return <SplashScreen />;

  return (
    <Navigator>
        {
          status !== 'nologged' ? (
            <>
              <Screen name='HomeScreen' component={HomeScreen} />
              <Screen name='DetailsScreen' component={DetailsScreen} />
              <Screen name='SearchScreen' component={SearchScreen} />
            </>
          ) : (<Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />)
        }
        
    </Navigator>
  )
}

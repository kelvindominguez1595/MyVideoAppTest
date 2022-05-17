import React, { useContext } from 'react'
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from '../views/SplashScreen';
import { LoginScreen } from '../views/LoginScreen';
import { HomeScreen } from '../views/HomeScreen';
import { DetailsScreen } from '../views/DetailsScreen';
import { SearchScreen } from '../views/SearchScreen';
import { AuthContext } from '../components/Context/AuthContext';

export type RootStackParams = {
  SplashScreen: undefined, 
  LoginScreen: undefined,
  HomeScreen: undefined, 
  DetailsScreen: {id: number},
  SearchScreen: {query: string}, 
}

const MainStack = createNativeStackNavigator<RootStackParams>();

export const MainStackNavigation = () => {

  const {status, logout} = useContext(AuthContext);
  const {Navigator, Screen} = MainStack;

  if(status == 'wait') return <SplashScreen />;

  return (
    <Navigator>
        {
          status !== 'nologged' ? (
            <>
              <Screen name='HomeScreen' component={HomeScreen} 
              options={{ title: "Home", headerRight: () => (
                        <Button
                        title="LOGOUT"
                        onPress={ logout }
                      />
              ) }} />
              <Screen name='DetailsScreen' component={DetailsScreen} />
              <Screen name='SearchScreen' component={SearchScreen} />
            </>
          ) : (<Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />)
        }
        
    </Navigator>
  )
}

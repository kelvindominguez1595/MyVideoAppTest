import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigation } from './src/configs/MainStackNavigation'

export const App = () => {
  return (
   <NavigationContainer>
       <MainStackNavigation />
   </NavigationContainer>
  )
}

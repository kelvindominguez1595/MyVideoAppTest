import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { MainStackNavigation } from './src/interfaces/MainStackNavigation'

export const App = () => {
  return (
   <NavigationContainer>
       <MainStackNavigation />
   </NavigationContainer>
  )
}

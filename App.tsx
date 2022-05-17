import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigation } from './src/configs/MainStackNavigation'
import { AuthProvider } from './src/components/Context/AuthContext'

const AppSatus = ({children} : any) =>{
    return (<AuthProvider>
        {children}
    </AuthProvider>)
}

 const App = () => {
  return (
   <NavigationContainer>
       <AppSatus>
            <MainStackNavigation />
       </AppSatus>
   </NavigationContainer>
  )
}

export default App;
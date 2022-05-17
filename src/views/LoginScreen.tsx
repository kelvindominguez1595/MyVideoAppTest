import React, { useContext, useEffect } from 'react'
import { Button, Icon, Input } from "@rneui/base";
import { Alert, Image, Keyboard, Text, View } from 'react-native'

import { logomovieapp } from '../assets/images';
import { useLogin } from '../UserFormContent/useLogin';
import { LoginStyles } from '../assets/styles/LoginStyles';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { AuthContext } from '../components/Context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any>{};
export const LoginScreen = ({navigation}: Props) => {

  const { login, messageError, deleteMessage, status } = useContext(AuthContext);

  const {email, password, onChange } = useLogin({
    email:'',
    password: ''
  });



  useEffect(() => {
    if(messageError.length === 0) return;
    Alert.alert('Alert', messageError, [{ text: 'ok', onPress: deleteMessage}] )
  }, [messageError])

  const onLogin = () => {
    Keyboard.dismiss();
    login({email, password: password});
  }

  return (
    <View style={LoginStyles.container}>      
        
        <Image source={logomovieapp} resizeMode={'contain'} style={LoginStyles.logoMovieapp}  />

      <Input 
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={ (val) => onChange(val, 'email')}
        leftIcon={
         <Icon 
         name='user-alt'
         type='font-awesome-5'
         color='#000000'
         />
        
        }
      />
      <Input 
      placeholder='Password'
      secureTextEntry={true}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={ (val) => onChange(val, 'password')}
      leftIcon={
        <Icon 
        name='eye-slash'
        type='font-awesome-5'
        color='#000000'
        />
       
       }
      />
        <Button
          title="LOGIN"
          onPress={ onLogin }
          containerStyle={[GlobalStyles.btnContainer, {width:'50%'}]}                
          buttonStyle={GlobalStyles.btnColor}                 
        />
    </View>
  )
}
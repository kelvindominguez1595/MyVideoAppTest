import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

import { SplashStyles } from '../../assets/styles/SplashStyles';
import { LOADER } from '../../assets/json';

export const LoaderScreen = () => {
  return (
    <View style={SplashStyles.container}>
        <LottieView 
            source={LOADER}
            autoPlay={true}
            loop={true}
        />        
    </View>
  )
}

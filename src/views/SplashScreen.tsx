import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

import { SplashStyles } from '../assets/styles/SplashStyles'
import { SPLASH_JSON } from '../assets/json';

export const SplashScreen = () => {
  return (
    <View style={SplashStyles.container}>
      <LottieView
        source={SPLASH_JSON}
        autoPlay
        loop={false}
        // onAnimationFinish= { console.log("cuando termine hacer algo") }
      />
    </View>
  )
}

import React, { useContext } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

import { SplashStyles } from '../assets/styles/SplashStyles'
import { SPLASH_JSON } from '../assets/json';
import { AuthContext } from '../components/Context/AuthContext';

export const SplashScreen = () => {

  const {verifyStatus} = useContext(AuthContext);

  return (
    <View style={SplashStyles.container}>
      <LottieView
        source={SPLASH_JSON}
        autoPlay
        loop={false}
         onAnimationFinish= { verifyStatus }
      />
    </View>
  )
}

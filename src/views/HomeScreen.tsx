import React from 'react'
import { FlatList, Text, View } from 'react-native';

import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { CardsContens } from '../components/cardsMovies/CardsContens';
import { LoaderScreen } from '../components/LoaderSpiner/LoaderSpiner';
import { useMovies } from '../UserFormContent/useMovies';

export const HomeScreen = () => {
  
  const { dataMovies, loading } = useMovies();
  if(loading) {
    return <LoaderScreen />
  }
  return (
    <View style={{flex:1}}>
      <Text style={GlobalStyles.titleH1}>Popular Movies</Text>
      <FlatList 
        data={dataMovies}
        renderItem={({item}: any) => (
          <CardsContens 
            horizontal={false}
            result={item}
          />
        )}  
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

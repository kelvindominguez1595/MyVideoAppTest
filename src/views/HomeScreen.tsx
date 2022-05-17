import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native';

import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { CardsContens } from '../components/cardsMovies/CardsContens';
import { InpuComponente } from '../components/InputComponents';
import { LoaderScreen } from '../components/LoaderSpiner/LoaderSpiner';
import { useMovies } from '../UserFormContent/useMovies';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [value, setvalue] = useState('');
  
  const { dataMovies, loading } = useMovies();

  const searchItem = () => {
    navigation.navigate("SearchScreen",  { query: value})
  } 
  
  if(loading) {
    return <LoaderScreen />
  }
  return (
    <View style={{flex:1}}>
      <InpuComponente 
           onChange={(data) => {setvalue(data)} } onKeyPres={(data) => {}}
           onPress={searchItem}
      />
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

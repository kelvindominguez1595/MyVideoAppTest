import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { CardsContens } from '../components/cardsMovies/CardsContens';
import { InpuComponente } from '../components/InputComponents';

import { RootStackParams } from '../configs/MainStackNavigation';
import { useSearchMovies } from '../UserFormContent/useSearchMovie';


interface Props extends NativeStackScreenProps<RootStackParams, 'SearchScreen'>{};

export const SearchScreen = ({route}: Props) => {
  const res = route.params;
  const [dataSearch, setdataSearch] = useState(res.query);  
  const { movies, loading, searchtxt } = useSearchMovies(dataSearch);

  
  if(loading){
    return <ActivityIndicator size="large" />
  } else {
      return (    
            <View>              
              <InpuComponente
               onChange={(data) => {} } onKeyPres={(data) => {} }
               onPress={ (val) => { setdataSearch(val)}}
                />
              <View style={styles.rowContainer}>
                    <Text>Search: </Text>
                    <Text style={GlobalStyles.titleH1}>{searchtxt}</Text>
              </View>

              <FlatList        
                data={movies}
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
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignContent: 'flex-start'
  }
})

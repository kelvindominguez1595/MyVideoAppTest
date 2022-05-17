import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../configs/MainStackNavigation';
import { useMovieDetails } from '../UserFormContent/useDetailsMovies';
import { IMAGE_MOVIE } from '../configs/urls';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

import { CardsContens } from '../components/cardsMovies/CardsContens';
import { GenresContent } from '../components/cardsMovies/GenresContent';

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailsScreen'>{};

export const DetailsScreen = ({route, navigation} : Props) => {
  const params = route.params;
  const { loading, dataMovies} = useMovieDetails(params.id);

 
  useEffect(() => {
    navigation.setOptions({
      title: dataMovies?.title
    })
  }, [dataMovies])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (<ActivityIndicator size="large" />) : (<>
        <View style={styles.conatinerimage}>
          <Image 
            style={styles.poster}
            resizeMode= "contain"
            source={{uri: IMAGE_MOVIE + dataMovies?.poster_path}}
          />
        </View>
        <View style={[styles.rowContainer, styles.spacetext]}>
                <Text style={GlobalStyles.subTitles}>Release Date: </Text>
                <Text>{dataMovies?.release_date}</Text>
        </View>

        <Text style={GlobalStyles.subTitles}>Overview: </Text>
        <Text style={styles.spacetext}>{dataMovies?.overview}</Text>
        <View style={[styles.rowContainer, styles.spacetext]}>
            <Text style={GlobalStyles.subTitles}>Average Votes: </Text>
            <Text>{dataMovies?.vote_average}</Text>
        </View> 
        <Text style={GlobalStyles.subTitles}>Genres: </Text>
        <View style={[styles.rowContainer]}>
            {
              dataMovies?.genres.map((item) => (
                <GenresContent key={item.id.toString()} result={item} />
                ))
              }
        </View>
        </>)}
        <Text style={[styles.spacetext,GlobalStyles.subTitles]}>Suggested</Text>
    

      </ScrollView>

     
   
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  spacetext: {
    marginBottom: 10
  },
  poster: {
    width: 250,
    height: 300,
    borderRadius: 10,
    },
    conatinerimage: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    rowContainer: {
      flexDirection: 'row',     
  },
});

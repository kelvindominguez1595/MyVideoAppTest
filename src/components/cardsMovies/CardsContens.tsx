import '@rneui/themed';
import React from 'react'
import { Divider } from '@rneui/base'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


import { IMAGE_MOVIE } from '../../configs/urls';
import { Result } from '../../interfaces/MoviesInterface';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

interface Props {
    result: Result,
    horizontal: boolean
}
export const CardsContens = ({result, horizontal}: Props) => {
    const navigation = useNavigation<any>();

  return (
      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={() => {        
        navigation.navigate("DetailsScreen", result)
      }}
      >
            <View style={horizontal ? styles.containerCardLand: styles.containerCard}>
                    
            <View style={styles.rowContainer}>

                <View style={styles.containerImage}>
                    <Image
                        style={horizontal ? styles.imageLand : styles.image}
                        resizeMode="contain"
                        source={{uri: IMAGE_MOVIE + result.poster_path}}
                    />
                </View>
        
                <View style={styles.containerBody}>

                    <Text style={GlobalStyles.titleH1}>{result.title}</Text>
                    <Divider />
                    <View style={ horizontal ? styles.columContainer : styles.rowContainer}>
                        <Text style={GlobalStyles.subTitles}>Release Date: </Text>
                        <Text>{result.release_date}</Text>
                    </View>
                    {
                        horizontal ? (<></>) : (
                            <>
                                <Text style={GlobalStyles.subTitles}>Overview</Text>
                                <Text numberOfLines={5}>{result.overview}</Text>
                            </>
                        )  
                    }
              
                    <View style={ horizontal ? styles.columContainer : styles.rowContainer}>
                        <Text style={GlobalStyles.subTitles}>Average Votes: </Text>
                        <Text>{result.vote_average}</Text>
                    </View>           
                </View>

            </View>       
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    containerCardLand: { 
        flex:1,
        margin: 10,
        padding: 10,
   
        backgroundColor: 'white',
        borderRadius: 8,     
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,        
        elevation: 3,        
    },
    containerCard: { 
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,     
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,        
        elevation: 3,        
    },
    rowContainer: {
        flexDirection: 'row'
    },
    containerImage: {
        justifyContent: 'center',
        marginRight: 5
    },
    containerBody: {
        flex:1,    
    },
    image: {
        width:120, 
        height:150,
        borderRadius: 5,
    },
    imageLand: {
        width:90, 
        height:150,
        borderRadius: 5,
    },
    columContainer: {
        flexDirection: 'column'
    }
})

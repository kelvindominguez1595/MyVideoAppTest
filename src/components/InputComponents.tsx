import React, { useEffect, useState } from 'react'

import { Icon } from '@rneui/base'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

interface Props {
  onChange: (val: string) => void;
  onKeyPres: (val: any) => void;
  onPress: (val: string) => void;
}

export const InpuComponente = ({onChange, onKeyPres, onPress}: Props) => {

  const [txvalue, setValue] = useState('')

  useEffect(() => {
    onChange(txvalue);
  }, [txvalue])
  

  return (
    <View style={styles.inputBackground}>
    <TextInput 
      placeholder='Search Movie'
      autoCapitalize='none'
      autoCorrect={false}
      value = {txvalue}
      onChangeText = {setValue}
      onKeyPress={onKeyPres}
    />
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(txvalue)}
    >
        <Icon
          name='search'
          type='font-awesome'
          color="grey"
          size={20}
        />

    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    inputBackground: {
        backgroundColor: "#BBBBBB",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius: 50,
        margin: 10,
      }
})

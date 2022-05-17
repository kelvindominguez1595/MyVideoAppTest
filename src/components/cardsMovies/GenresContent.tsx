import '@rneui/themed';
import React from 'react'
import { Badge } from '@rneui/base';
import { Genre } from '../../interfaces/MoviesInterface';

interface Props {
    result: Genre
}
export const GenresContent = ({result}: Props) => {
  

  return ( <Badge value={result.name} status="primary"/>)
}

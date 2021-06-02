import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyLinks() {
  return (
    <LinearGradient
      colors={ [ '#908', '#216362' ] }
      style={ { flex: 1, justifyContent: 'center' } }
    >
      <Text>MyLinks</Text>
    </LinearGradient>
  )
}
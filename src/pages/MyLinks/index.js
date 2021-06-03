import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinks() {
  return (
    <LinearGradient
      colors={ [ '#908', '#216362' ] }
      style={ { flex: 1, justifyContent: 'center' } }
    >
      <StatusBarPage
        barStyle='light-content'
        backgroundColor='#132742'
      />
      <Text>MyLinks</Text>
    </LinearGradient>
  )
}
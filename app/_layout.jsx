import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
          <Stack.Screen name='index'   options={{ headerShown: false}}/>
          <Stack.Screen name="(tabs)"   options={{ headerShown: false}}/>
          <Stack.Screen name='Login'  options={{ headerShown: false}}/>
          <Stack.Screen name='Loading'  options={{ headerShown: false}}/>
      </Stack>
    </Provider>


  )
}
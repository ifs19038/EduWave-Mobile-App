import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';

export default function Loading() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/Riwayat');
    }, 1800);
  }, []);

  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="light" />
      <LottieView style={{flex: 1}} source={require('../assets/AnimasiUang.json')} autoPlay loop />
    </View>
  );
}

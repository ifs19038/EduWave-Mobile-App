import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function index() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value+50), 100)
        setTimeout(() => ring2padding.value = withSpring(ring1padding.value+60), 100)

        setTimeout(()=> router.replace('/Login'),2500)
    })
  return (
    <View className="flex-1 justify-center items-center space-y-10 " style={{backgroundColor:'#19363B'}}>
        <StatusBar style='light'/>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1padding}}>
            <Image source={require('../assets/Logo.png')} className="rounded-xl" style={{ width: 130, height: 130 }}/>
        </Animated.View>
        </Animated.View>

        <View className="flex items-center space-y-2">
            <Text className="font-bold text-white tracking-widest text-3xl">
                EduWave
            </Text>
            <Text className="font-bold text-white tracking-widest text-sm text-center mx-10">
                Edukasi Terbaik dimulai dari sarana dan prasarana yang memadai
            </Text>
        </View>
    </View>
  )
}
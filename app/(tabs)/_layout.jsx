import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, Slot } from 'expo-router';
import { HomeIcon, RectangleGroupIcon, UserIcon } from 'react-native-heroicons/solid';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: '9%',
          marginBottom:14,
          marginHorizontal:20,
          borderRadius:15,
          position: 'absolute'
        },
      }}
    >
      {/* <Tabs.Screen name="Home"
              options={{ 
                title: "",
                headerShown: false, 
                tabBarIcon: ({ focused }) => {
                  return (
                    <View className={`items-center pt-4 border-t-[2px]  flex justify-center items-center ${focused ? 'border-t-[#1AA47B]' : 'border-t-white'}`}>
                      <HomeIcon size={26} color={`${focused ? '#1AA47B' : '#bcbcbc'}`} />
                      <Text className={`text-xs ${focused ? 'text-[#1AA47B]' : 'text-[#bcbcbc]'}`}>Home</Text>
                    </View>
                  );
                },
              }}  /> */}
      <Tabs.Screen 
        name="Home" 
        options={{ 
          title: "",
          headerShown: false, 
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View className={`items-center mt-4 top-[-20] py-[28] px-[18] flex justify-center items-center bg-primary rounded-full border-8 border-bgColor`}>
                <HomeIcon size={26} color={'white'} />
                <Text className={`text-xs text-white`}>Home</Text>
              </View>
            ):
            (
              <View className={`items-center pt-4 flex justify-center items-center`}>
                <HomeIcon size={26} color={'#bcbcbc'} />
                <Text className={`text-xs 'text-[#bcbcbc]'`}>Home</Text>
              </View>
            );
          },
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{ 
          title: "",
          headerShown: false, 
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View className={`items-center mt-4 top-[-20] py-[28] px-[20] flex justify-center items-center bg-primary rounded-full border-8 border-bgColor`}>
                <UserIcon size={26} color={'white'} />
                <Text className={`text-xs text-white`}>Profil</Text>
              </View>
            ):(
              <View className={`items-center pt-4 flex justify-center items-center`}>
                <UserIcon size={26} color={'#bcbcbc'} />
                <Text className={`text-xs 'text-[#bcbcbc]'`}>Profil</Text>
              </View>
            )
          },
        }} 
      />
      {/* <Tabs.Screen name="Golongan"
        options={{ 
          title: "",
          headerShown: false, 
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center pt-4 border-t-[2px]  flex justify-center items-center ${focused ? 'border-t-[#1AA47B]' : 'border-t-white'}`}>
                <RectangleGroupIcon size={26} color={`${focused ? '#1AA47B' : '#bcbcbc'}`} />
                <Text className={`text-xs ${focused ? 'text-[#1AA47B]' : 'text-[#bcbcbc]'}`}>Golongan</Text>
              </View>
            );
          },
        }}  /> */}




      <Tabs.Screen name="Riwayat" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}

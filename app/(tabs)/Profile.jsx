import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { ArrowLeftStartOnRectangleIcon, AtSymbolIcon, BellIcon, BuildingLibraryIcon, ChartBarIcon, ChevronRightIcon, HomeIcon, PencilSquareIcon, PhoneIcon, UserIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'
import { clearUser } from '../../redux/feature/userSlice';



export default function Profile() {
const dispatch = useDispatch();
const user = useSelector((state) => state.user);
const handleLogout = () => {
  dispatch(clearUser());
  router.replace('/Login');
};
  return (
    <View className="flex-1 bg-bgColor pb-24">
      <StatusBar style='dark'/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        >
          <View className="  bg-primary pb-12 rounded-b-3xl shadow-2xl shadow-primary pt-16 " >
            <View className=" mx-6 flex-row items-center ">
              <Image source={require('../../assets/logoSekolah.png')} style={{width:70, height:70}}/>
              <View className="ml-5">
                <View className="flex-row">
                  <Text className="text-2xl text-white">{user.nama}</Text>
                  <Pressable className="rounded-lg  px-2 ">
                    {/* <PencilSquareIcon size={22} color="white"/> */}
                  </Pressable>
                </View>
                <Text className="text-white text-md">{user.NIS}</Text>
              </View>

            </View>
          </View>

          <View className="mx-6 mt-5">
            <Text className="text-xl">Detail Profil</Text>
            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <UserIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Nama Lengkap</Text>
                    <Text className="text-lg ">{user.nama}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <BuildingLibraryIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">NIS</Text>
                    <Text className="text-lg ">{user.NIS}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <AtSymbolIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Email</Text>
                    <Text className="text-lg ">{user.email}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <PhoneIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Nomor Hp</Text>
                    <Text className="text-lg ">{user.no_hp}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <PhoneIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Nomor Hp Orang Tua</Text>
                    <Text className="text-lg ">{user.no_hp}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <HomeIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Alamat</Text>
                    <Text className="text-lg ">{user.alamat}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between">
                <View className="flex-row  items-center space-x-4">
                  <ChartBarIcon size={25} color="#1AA47B"/>
                  <View className="">
                    <Text className="text-md text-neutral-400">Golongan</Text>
                    <Text className="text-lg ">{user.golongan}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex-row justify-between ">
                <Pressable onPress={handleLogout}>
                  <View className="flex-row  items-center space-x-4 ">
                    <ArrowLeftStartOnRectangleIcon size={25} color="red"/>
                    <View className="">
                      <Text className="text-lg ">Keluar</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>

          </View>

      </ScrollView>
      
    </View>
  )
}
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { UserIcon, BuildingLibraryIcon } from 'react-native-heroicons/outline';
import axios from 'axios';
import { setUser } from '../redux/feature/userSlice';
import { setTransaksi } from '../redux/feature/riwayatSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [nis, setNis] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nisError, setNisError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError('Format email tidak valid.');
    } else {
      setEmailError('');
    }
  };

  const handleNisChange = (text) => {
    if (/^\d*$/.test(text)) {
      setNis(text);
      setNisError('');
    } else {
      setNisError('NIS hanya boleh berisi angka.');
    }
  };

  const handleLogin = async () => {
    if (!emailError && !nisError) {
      try {
        const response = await axios.post('http://10.10.103.149:8080/api/v1/siswa/login', {
          nis,
          email,
        });

        const data = response.data.data;
        //console.log(data);

        const response2 = await axios.get(`http://10.10.103.149:8080/api/v1/transaksi/siswa/${data.id}`);

        const data2 = response2.data.data;
        console.log(data2);
        if (data.id) {
          dispatch(setUser(data));
          dispatch(setTransaksi(data2));
          router.replace('/(tabs)/Home');
        } else {
          alert('Email atau NISN tidak valid.');
        }
      } catch (error) {
        console.error(error);
        alert('Email atau NISN tidak valid.');
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center mb-16">
      <View className="shadow-xl shadow-primary bg-white rounded-xl">
        <Image source={require('../assets/Logo.png')} className="rounded-xl" style={{ width: 110, height: 110 }} />
      </View>
      <View className="mt-4">
        <Text className="text-gray-700 text-2xl text-center">Welcome Back!</Text>
        <Text className="text-gray-700 text-md text-center">Masuk Menggunakan data anda</Text>
      </View>
      <View className="mt-6 w-72">
        <View className="flex-row">
          <View className="bg-white shadow-xl shadow-primary rounded-full p-4 z-20">
            <UserIcon size={25} color={'#1AA47B'} />
          </View>
          <View className="flex-1 bg-white shadow-lg shadow-primary rounded-full p-2 ml-[-40] my-2">
            <TextInput
              placeholder='Email'
              placeholderTextColor={'#1AA47B'}
              className="ml-12"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
          </View>
        </View>
        {emailError ? <Text className="text-red-500 text-xs mt-1">{emailError}</Text> : null}

        <View className="flex-row mt-4">
          <View className="bg-white shadow-xl shadow-primary rounded-full p-4 z-20">
            <BuildingLibraryIcon size={25} color={'#1AA47B'} />
          </View>
          <View className="flex-1 bg-white shadow-lg shadow-primary rounded-full p-2 ml-[-40] my-2">
            <TextInput
              placeholder='NIS'
              placeholderTextColor={'#1AA47B'}
              className="ml-12"
              value={nis}
              onChangeText={handleNisChange}
              keyboardType="numeric"
            />
          </View>
        </View>
        {nisError ? <Text className="text-red-500 text-xs mt-1">{nisError}</Text> : null}
      </View>
      <View className="mt-7 bg-white shadow-xl shadow-primary rounded-full">
        <TouchableOpacity 
          onPress={handleLogin} 
          className="bg-primary py-3 px-12 rounded-full"
          disabled={!!emailError || !!nisError || !email || !nis}
        >
          <Text className="text-white">Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

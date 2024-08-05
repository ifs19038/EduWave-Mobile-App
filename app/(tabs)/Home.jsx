// import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { useSelector} from 'react-redux';
// import { StatusBar } from 'expo-status-bar';
// import { BellIcon, ChevronRightIcon} from 'react-native-heroicons/outline';
// import { CheckBadgeIcon, ShieldCheckIcon } from 'react-native-heroicons/solid';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { nisData, tagihanData, riwayatData } from '../../data';
// import { router } from 'expo-router'

// export default function Home() {
//   const user = useSelector((state) => state.user);
//   const transaksiState = useSelector((state) => state.transaksi);
//   const transaksi = transaksiState.transaksi;
//   console.log(transaksi)

//   useEffect(() => {
//     if (!user.id) {
//       router.replace('/Login');
//     }
//   }, [user, router]);

//   if (!user.id) {
//     return null; // or a loading spinner
//   }

//   return (
//     <View className="flex-1 bg-bgColor pb-24">
//       <StatusBar style='light'/>
//       <ScrollView 
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{paddingBottom: 50}}
//         >
//           <View className="bg-primary pb-64 rounded-b-full mx-[-150] z-0" >
//           </View>
//           <View className="mt-[-160] mx-6 flex-row justify-between items-center mb-2 z-50">
//             <View>
//               <Text className="text-2xl text-white">{user.nama}</Text>
//               <Text className="text-white">{user.sekolah}</Text>
//             </View>
//             <Image source={{uri : user.urlLogo}} style={{width:70, height:70}}/>
//           </View>

//           <View className="mx-6 mt-5 py-7 px-5 rounded-2xl shadow-xl bg-white shadow-gray-500">
//             <View className="flex flex-row justify-between">
//               <View className="space-y-3">
//                 <Text className="text-neutral-600">Total tagihan yang harus di bayarkan:</Text>
//                 <Text className="text-3xl">Rp. {user.tagihan}</Text>
//                 <View className="flex-row">
//                   <CheckBadgeIcon color={'#1AA47B'} size={20}/>
//                   <Text className="text-sm text-black"> {user.status}</Text>
//                 </View>
//               </View>
//               <View className="flex justify-center">
//                 <TouchableOpacity className="p-2 rounded-full bg-red-500">
//                   <ChevronRightIcon size={20} strokeWidth={4.5} color="white" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
// {/* 
//           <View className="mx-6 mt-5">
//             <Text className="text-xl">Riwayat Pembayaran</Text>
//             <View className="mt-5">
//               <View style={{
//                 borderBottomColor: '#bcbcbc',
//                 borderBottomWidth: 1,
//                 width: '100%',
//                 marginBottom :10
//               }} />  
//               {riwayat.map((item, index) => (
//                 <Pressable key={index} onPress={() => router.push('/Loading')}>
//                   <View className="flex-row justify-between">
//                     <View className="flex-row items-center space-x-4">
//                       <Image source={require('../../assets/logoSekolah.png')} style={{width:50, height:50}} />
//                       <View>
//                         <Text className="text-lg">{item.golongan}</Text>
//                         <Text className="text-xs text-neutral-400">{item.tanggal}</Text>
//                       </View>
//                     </View>
//                     <View className="mt-2">
//                       <Text>Rp. {item.jumlah}</Text>
//                     </View>
//                   </View>
//                 </Pressable>
//               ))}
//             </View>
//           </View> */}
          
//         <View className="mx-6 mt-5">
//           <Text className="text-xl">Riwayat Pembayaran</Text>
//           <View className="mt-5">
//             <View style={{
//               borderBottomColor: '#bcbcbc',
//               borderBottomWidth: 1,
//               width: '100%',
//               marginBottom: 10
//             }} />
//             {transaksi.map((item, index) => (
//               <Pressable key={index} onPress={() => router.push('/Loading')}>
//                 <View className="flex-row justify-between py-2">
//                   <View className="flex-row items-center space-x-4">
//                     <Image source={{uri : user.urlLogo}} style={{width:50, height:50}} />
//                     <View>
//                       <Text className="text-lg">Uang Sekolah</Text>
//                       <Text className="text-xs text-neutral-400">{new Date(item.tanggal_transaksi).toLocaleDateString()}</Text>
//                     </View>
//                   </View>
//                   <View className="mt-2">
//                     <Text>Rp. {item.jumlah_pembayaran.toLocaleString()}</Text>
//                   </View>
//                 </View>
//               </Pressable>
//             ))}
//           </View>
//         </View>
          
//       </ScrollView>
//     </View>
//   );
// }


import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { CheckIcon, XMarkIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import { CheckBadgeIcon, ExclamationCircleIcon, ClockIcon, ExclamationTriangleIcon } from 'react-native-heroicons/solid';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchTransaksiById, setSelectedItem } from '../../redux/feature/detailTransaksiSlice';
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const user = useSelector((state) => state.user);
  const transaksiState = useSelector((state) => state.transaksi);
  const transaksi = transaksiState.transaksi;
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState(-1);

  useEffect(() => {
    if (!user.id) {
      router.replace('/Login');
    }
  }, [user, router]);

  const handlePress = async (id) => {
    try {
      const response = await fetch(`http://10.10.103.149:8080/api/v1/transaksi/${id}`);
      const data = await response.json();
      dispatch(setSelectedItem(data)); // Set data transaksi di Redux
      router.push('/Loading'); // Navigasi ke halaman berikutnya
    } catch (error) {
      console.error('Failed to fetch transaction data:', error);
    }
  };

  if (!user.id) {
    return null; // or a loading spinner
  }

  // Filtering transaksi berdasarkan bulan yang dipilih
  const filteredTransaksi = selectedMonth !== -1
    ? transaksi.filter((item) => new Date(item.tanggal_transaksi).getMonth() + 1 === selectedMonth)
    : transaksi;

  return (
    <View className="flex-1 bg-bgColor pb-24">
      <StatusBar style='light'/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        >
          <View className="bg-primary pb-64 rounded-b-full mx-[-150] z-0" >
          </View>
          <View className="mt-[-160] mx-6 flex-row justify-between items-center mb-2 z-50">
            <View>
              <Text className="text-2xl text-white">{user.nama}</Text>
              <Text className="text-white">{user.sekolah}</Text>
            </View>
            <Image source={{uri : user.urlLogo}} style={{width:70, height:70}}/>
          </View>

          <View className="mx-6 mt-5 py-7 px-5 rounded-2xl shadow-xl bg-white shadow-gray-500">
            <View className="flex flex-row justify-between">
              <View className="space-y-3">
                <Text className="text-neutral-600">Total tagihan yang harus di bayarkan:</Text>
                <Text className="text-3xl">Rp. {user.tagihan.toLocaleString()}</Text>
                <View className="flex-row">
                  {user.status === 'LUNAS' ? (
                    <>
                      <CheckBadgeIcon color={'#1AA47B'} size={20}/>
                      <Text className="text-sm text-black"> Lunas</Text>
                    </>
                  ) : (
                    <>
                      <ExclamationCircleIcon color={'#FF564A'} size={20}/>
                      <Text className="text-sm text-black"> Belum Lunas</Text>
                    </>
                  )}
                </View>
              </View>
              <View className="flex justify-center">
                <TouchableOpacity className="p-2 rounded-full bg-primary">
                  <ChevronRightIcon size={20} strokeWidth={4.5} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>          
          <View className="mx-6 mt-5">
            <View className="flex  flex-row justify-between ">
              <View className="flex justify-center items-center">
                <Text className="text-xl  ">Riwayat Pembayaran</Text>
              </View>
              <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
              style={{ height: 50, width: 50,}}
              >
              <Picker.Item label="Semua Bulan" value={-1} />
              <Picker.Item label="Januari" value={1} />
              <Picker.Item label="Februari" value={2} />
              <Picker.Item label="Maret" value={3} />
              <Picker.Item label="April" value={4} />
              <Picker.Item label="Mei" value={5} />
              <Picker.Item label="Juni" value={6} />
              <Picker.Item label="Juli" value={7} />
              <Picker.Item label="Agustus" value={8} />
              <Picker.Item label="September" value={9} />
              <Picker.Item label="Oktober" value={10} />
              <Picker.Item label="November" value={11} />
              <Picker.Item label="Desember" value={12} />
            </Picker>
            </View>
            <View className="mt-5">
              <View style={{
                borderBottomColor: '#bcbcbc',
                borderBottomWidth: 1,
                width: '100%',
                marginBottom: 10
              }} />
              {filteredTransaksi.map((item, index) => (
                <Pressable key={index} onPress={() => handlePress(item.id)}>
                  <View className="flex-row justify-between py-2">
                    <View className="flex-row items-center space-x-4">
                      <View className={`${getColor(item.status_pembayaran)} rounded-full flex justify-center items-center`} style={{width: 50, height: 50}}>
                        {getIcon(item.status_pembayaran)}
                      </View>
                      <View>
                        <Text className="text-lg">Uang Sekolah</Text>
                        <Text className="text-xs text-neutral-400">{new Date(item.tanggal_transaksi).toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <View className="mt-2">
                      <Text>Rp. {item.jumlah_pembayaran.toLocaleString()}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
          
      </ScrollView>
    </View>
  );
}

/*
settlement check
deny exclamation-circle
pending exclamation-triangle
cancel xmark
expire clock
failure exclamation-circle
*/
const getColor = (status) => {
  switch (status) {
    case 'settlement':
      return 'bg-green-600';
    case 'deny':
      return 'bg-red-600';
    case 'pending':
      return 'bg-yellow-500';
    case 'cancel':
      return 'bg-gray-500';
    case 'expire':
      return 'bg-red-600';
    case 'failure':
      return 'bg-red-600';
    default:
      return 'bg-red-500';
  }
};

const getIcon = (status) => {
  switch (status) {
    case 'settlement':
      return <CheckIcon size={30} color={'white'} />;
    case 'deny':
      return <ExclamationCircleIcon size={30} color={'white'} />;
    case 'pending':
      return <ExclamationTriangleIcon size={30} color={'white'} />;
    case 'cancel':
      return <XMarkIcon size={30} color={'white'} />;
    case 'expire':
      return <ClockIcon size={30} color={'white'} />;
    case 'failure':
      return <ExclamationCircleIcon size={30} color={'white'} />;
    default:
      return <ExclamationCircleIcon size={30} color={'white'} />;
  }
};






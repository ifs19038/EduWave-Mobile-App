
// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { CheckIcon} from 'react-native-heroicons/outline'
// import { ShieldCheckIcon } from 'react-native-heroicons/solid'

// export default function Riwayat() {
//   return (
//     <View className="flex-1 bg-primary">
//       <StatusBar  style='light'/>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{paddingBottom: 50}}
//       >
//         <View className="pt-20">
//           <View className="mx-6">
//             <View className="flex-1 bg-bgColor rounded-2xl mx-3 px-6 py-2">

//               <View className="flex justify-center items-center  py-8">
//                 <View className="bg-primary p-3  rounded-full">
//                   <CheckIcon size={50} color={'white'}/>
//                 </View>
//                 <Text className="mt-3 text-lg">Pembayaran Uang Sekolah</Text>
//               </View>

//               <View className="flex-row justify-between mb-4">
//                 <View>
//                 <Text className="text-neutral-600 font-bold text-xs">Tanggal :</Text>
//                 </View>
//                 <View>
//                 <Text className="text-neutral-400 text-xs">8 Juni 2023</Text>
//                 </View>
//               </View>
//               <View className="flex-row justify-between ">
//                 <View className="bg-primary rounded-full px-4 py-3 ml-[-17%]">
//                   <Text className="text-primary">A</Text>
//                 </View>
//                 <View style={{
//                     borderBottomColor: '#bcbcbc',
//                     borderBottomWidth: 1,
//                     width: '95%',
//                     marginBottom: '8%',
//                     borderStyle: 'dashed'
//                   }} />
//                 <View className="bg-primary rounded-full px-4 py-3 mr-[-17%]">
//                   <Text className="text-primary">A</Text>
//                 </View>
//               </View>
//               <View className="flex-row">
//                 <ShieldCheckIcon color={'#1AA47B'} size={15}/>
//                 <Text className="pl-1 text-xs text-neutral-500">Transaksi Berhasil </Text>
//               </View>

//               <View className="mt-3 mb-5 ">
//                 <Text className="font-bold">Detail Transakasi :</Text>
//                 <View className="mt-2 ml-2 space-y-3">

//                 <View className="flex-row justify-between">
//                     <Text className="text-neutral-500 text-xs">Id Transaksi</Text>
//                     <Text className="text-xs">12390092081308</Text>
//                   </View>

//                   <View className="flex-row justify-between">
//                     <Text className="text-neutral-500 text-xs">Nama</Text>
//                     <Text className="text-xs">Ahmad Zainuddin</Text>
//                   </View>

//                   <View className="flex-row justify-between">
//                     <Text className="text-neutral-500 text-xs">Jumlah Pembayaran</Text>
//                     <Text className="text-xs">Rp. 2.000.00</Text>
//                   </View>

//                   <View className="flex-row justify-between">
//                     <Text className="text-neutral-500 text-xs">Tanggal Transaksi</Text>
//                     <Text className="text-xs">8 Juni 2023</Text>
//                   </View>

//                   <View className="flex-row justify-between">
//                     <Text className="text-neutral-500 text-xs">Golongan</Text>
//                     <Text className="text-xs">2 A</Text>
//                   </View>
                  
//                 </View>
//               </View>

//               <View style={{
//                     borderBottomColor: '#bcbcbc',
//                     borderBottomWidth: 1,
//                     width: '100%',
//                     marginBottom: '5%',
//                     borderStyle: 'dashed'
//                   }} />

//               <View className="items-center py-8">
//                 <Text className="text-neutral-400 text-lg" > Terima kasih</Text>
//                 <Text className="text-neutral-400 text-sm">Telah menggunakan Jasa Kami</Text>
//               </View>

//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }


import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CheckIcon,     ClockIcon,} from 'react-native-heroicons/outline';
import {ExclamationTriangleIcon, ExclamationCircleIcon, ShieldCheckIcon, XCircleIcon} from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';

export default function Riwayat() {
  const selectedItem = useSelector((state) => state.detailTransaksi.data.data);

  if (!selectedItem) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-white">Loading...</Text>
      </View>
    );
  }
  const views = Array.from({ length: 16 });

  return (
    <View className="flex-1 bg-primary">
      <StatusBar style='light'/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
      >
        <View className="pt-20 ">
          <View className="mx-6 ">
            <View className="flex-1 bg-bgColor rounded-t-xl mx-3 px-6 py-2 ">

              <View className="flex justify-center items-center py-8">
                <View className="bg-primary p-3 rounded-full">
                  <CheckIcon size={50} color={'white'}/>
                </View>
                <Text className="mt-3 text-lg">Pembayaran Uang Sekolah</Text>
              </View>

              <View className="flex-row justify-between mb-4">
                <View>
                  <Text className="text-neutral-600 font-bold text-xs">Tanggal :</Text>
                </View>
                <View>
                  <Text className="text-neutral-400 text-xs">{new Date(selectedItem.transDate).toLocaleDateString()}</Text>
                </View>
              </View>
              <View className="flex-row justify-between">
                <View className="bg-primary rounded-full px-4 py-3 ml-[-17%]">
                  <Text className="text-primary">A</Text>
                </View>
                <View style={{
                  borderBottomColor: '#bcbcbc',
                  borderBottomWidth: 1,
                  width: '95%',
                  marginBottom: '8%',
                  borderStyle: 'dashed'
                }} />
                <View className="bg-primary rounded-full px-4 py-3 mr-[-17%]">
                  <Text className="text-primary">A</Text>
                </View>
              </View>
              <View className="flex-row">
                {/* <ShieldCheckIcon color={'#1AA47B'} size={15}/> */}
                {getIcon(selectedItem.transactionStatus)}
                <Text className="pl-1 text-xs text-neutral-500">{getMessage(selectedItem.transactionStatus)} </Text>
              </View>

              <View className="mt-3 mb-5">
                <Text className="font-bold">Detail Transakasi :</Text>
                <View className="mt-2 ml-2 space-y-3">

                  <View className="flex-row justify-between">
                    <Text className="text-neutral-500 text-xs">Id Transaksi</Text>
                    <Text className="text-xs">{selectedItem.id.substring(0, 10)}...</Text>
                  </View>

                  <View className="flex-row justify-between">
                    <Text className="text-neutral-500 text-xs">Nama</Text>
                    <Text className="text-xs">{selectedItem.nama}</Text>
                  </View>

                  <View className="flex-row justify-between">
                    <Text className="text-neutral-500 text-xs">Jumlah Pembayaran</Text>
                    <Text className="text-xs">Rp  {selectedItem.jumlahBayar.toLocaleString()}</Text>
                  </View>

                  <View className="flex-row justify-between">
                    <Text className="text-neutral-500 text-xs">Tanggal Transaksi</Text>
                    <Text className="text-xs">{new Date(selectedItem.transDate).toLocaleDateString()}</Text>
                  </View>

                  <View className="flex-row justify-between">
                    <Text className="text-neutral-500 text-xs">Golongan</Text>
                    <Text className="text-xs">{selectedItem.golongan}</Text>
                  </View>
                  
                </View>
              </View>

              <View style={{
                borderBottomColor: '#bcbcbc',
                borderBottomWidth: 1,
                width: '100%',
                marginBottom: '5%',
                borderStyle: 'dashed'
              }} />

              <View className="items-center pt-8 pb-12">
                <Text className="text-neutral-400 text-lg">Terima kasih</Text>
                <Text className="text-neutral-400 text-sm">Telah menggunakan EduWave</Text>
              </View>
            </View>
            
              <View className="flex-row mt-[-10]">
                {views.map((_, index) => (
                  <View key={index} className="w-4 h-4 bg-primary  rounded-full m-1" />
                ))}
              </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}


const getMessage = (status) => {
  switch (status) {
    case 'settlement':
      return 'Transaksi Berhasil';
    case 'deny':
      return 'Transaksi Ditolak';
    case 'pending':
      return 'Transaksi tertunda';
    case 'cancel':
      return 'Transaksi dibatalkan';
    case 'expire':
      return 'Transaksi Kadaluarsa';
    case 'failure':
      return 'Transaksi Gagal';
    default:
      return 'Salah';
  }
};

const getIcon = (status) => {
  switch (status) {
    case 'settlement':
      return <ShieldCheckIcon color={'#1AA47B'} size={15}/>;
    case 'deny':
      return <ExclamationCircleIcon size={15} color={'red'} />;
    case 'pending':
      return <ExclamationTriangleIcon size={15} color={'#E1C155'} />;
    case 'cancel':
      return <XCircleIcon size={15} color={'red'} />;
    case 'expire':
      return <ClockIcon size={15} color={'red'} />;
    case 'failure':
      return <ExclamationCircleIcon size={15} color={'red'} />;
    default:
      return <ExclamationCircleIcon size={15} color={'red'} />;
  }
};
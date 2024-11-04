import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import   MaterialIcons  from '@expo/vector-icons/MaterialIcons';
// import Ionicons from '@expo/vector-icons/build/Ionicons';

export default function ProfileScreen() {
  return (

    <SafeAreaView className='flex-1 bg-white'>
      <View className="">
        {/* Header */}
        <View className="flex-row items-center p-4 bg-white shadow">
          {/* <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity> */}
          <Text className="text-xl font-bold ml-4">Settings</Text>
        </View>

        {/* Profile Info */}
        <View className="items-center mt-6">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile image URL
            className="w-24 h-24 rounded-full mb-2"
          />
          <Text className="text-lg font-semibold">Raji Codebox</Text>
        </View>

        {/* Options List */}
        <ScrollView className="mt-6">
          {[
            { icon: 'notification', label: 'Notification Setting' },
            { icon: 'lock', label: 'Password Manager' },
            { icon: 'logout', label: 'Log out' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center p-4 border-b border-gray-300 bg-white"
            >
              {/* <MaterialIcons name='person' size={24} color="green" /> */}
              <Text className="flex-1 text-base ml-4">{item.label}</Text>
              {/* <Ionicons name="chevron-forward" size={24} color="gray" /> */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}

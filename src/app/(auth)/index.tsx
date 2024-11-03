import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
export default function LoginScreen() {
  return (
    <View className='flex-1 bg-blue-500 justify-center items-center px-4'>

      <View className={('mb-10')}>
        <Image
        alt='logo'
          source={require("@/assets/logo.png")}
          className='w-50 h-50'
          resizeMode="contain"
        />
      </View>


      <TextInput
        placeholder="Server URL"
        placeholderTextColor="#000"
        className='w-full bg-white border border-gray-200 rounded-lg  p-4 mb-4'
      />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#000"
        className='w-full bg-white border border-gray-200 rounded-lg  p-4 mb-4'
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry
        className='w-full bg-white border border-gray-200 rounded-lg  p-4 mb-6'
      />

      {/* Login Button */}
      <TouchableOpacity className='w-full bg-[#042151] rounded-full p-4 items-center'>
        <Text className='text-white text-lg font-semibold'>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}

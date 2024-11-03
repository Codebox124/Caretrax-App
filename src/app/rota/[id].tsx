import React from 'react';
import { View, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export default function RotaDetail() {
    const { id, name, time, duration, task } = useGlobalSearchParams();

    return (
        <View className='flex-1 bg-white p-4'>
            <Text className='text-2xl font-bold mb-4'>Rota Detail</Text>
            <Text className='text-lg font-semibold'>Name: {name}</Text>
            <Text className='text-lg'>Time: {time}</Text>
            <Text className='text-lg'>Duration: {duration}</Text>
            <Text className='text-lg'>Task: {task}</Text>
        </View>
    );
}

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const scheduleData = [
  {
    date: 'Tuesday, 2 July 2019',
    entries: [
      { id: '1', time: '10:40', duration: '1h 5m', name: 'Dawn Collis (DC)', task: 'Client Respite' },
    ],
  },

];

export default function Rota() {
  return (
    <View className='flex-1 bg-gray-100 p-4'>
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View className='mb-6 bg-white shadow-md px-3 rounded-md'>
            <Text className='text-lg font-bold text-gray-800 mb-2'>{item.date}</Text>
            {item.entries.map((entry) => (
              <Link
                key={entry.id}
                href={{ pathname: '/components/rotaDetail', params: { id: entry.id, name: entry.name, time: entry.time, duration: entry.duration, task: entry.task } }}
                asChild
              >
                <TouchableOpacity className='flex-row items-start py-3'>
                  <View>
                    <Text className='text-lg text-gray-900'>{entry.time}</Text>
                    <Text className='text-xs text-gray-500'>{entry.duration}</Text>
                  </View>
                  <View className='border-l-2 border-blue-700 px-4 flex-1 ml-4'>
                    <Text className='text-lg font-semibold text-gray-900'>{entry.name}</Text>
                    <Text className='text-sm text-gray-600'>{entry.task}</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        )}
      />
    </View>
  );
}

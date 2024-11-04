import React from 'react';
import { View, Text, FlatList } from 'react-native';

type Note = {
  id: string;
  content: string;
  date: string;
  author: string;
};

const sampleNotes: Note[] = [
  { id: '1', content: 'Ensure client has taken medication at 8:00 AM.', date: '2023-11-02', author: 'Nurse Amy' },
  { id: '2', content: 'Client prefers warm water for bathing.', date: '2023-11-01', author: 'Caregiver John' },
  { id: '3', content: 'Reminder: Client has a doctor appointment next Wednesday.', date: '2023-10-30', author: 'Supervisor' },
];

export default function Notes() {
  const renderItem = ({ item }: { item: Note }) => (
    <View className="bg-white p-4 mb-2 rounded-lg shadow-sm">
      <Text className="text-base text-gray-900">{item.content}</Text>
      <Text className="text-sm text-gray-500 mt-1">Date: {item.date}</Text>
      <Text className="text-sm text-gray-500">Author: {item.author}</Text>
    </View>
  );

  return (
    <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <Text className="text-lg font-bold">Notes</Text>
      {sampleNotes.length > 0 ? (
        <FlatList
          data={sampleNotes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          className="mt-2"
        />
      ) : (
        <Text className="text-gray-700 mt-2">No notes available</Text>
      )}
    </View>
  );
}

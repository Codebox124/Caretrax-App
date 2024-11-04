import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Document = {
  id: string;
  title: string;
  dateUploaded: string;
  description: string;
};

const sampleDocuments: Document[] = [
  { id: '1', title: 'Care Plan', dateUploaded: '2023-10-01', description: 'Detailed care plan for the month.' },
  { id: '2', title: 'Medication Chart', dateUploaded: '2023-10-05', description: 'List of medications and dosages.' },
  { id: '3', title: 'Client Consent Form', dateUploaded: '2023-10-10', description: 'Signed consent form for services.' },
];

export default function Documents() {
  const renderItem = ({ item }: { item: Document }) => (
    <View className="bg-white p-4 mb-2 rounded-lg shadow-sm flex-row items-center">
      <View className="flex-1">
        <Text className="text-base font-bold text-gray-900">{item.title}</Text>
        <Text className="text-sm text-gray-700 mt-1">Uploaded: {item.dateUploaded}</Text>
        <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
      </View>
      <TouchableOpacity className="ml-3">
        <MaterialIcons name="file-download" size={24} color="#3b82f6" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="  mb-4 rounded-lg">
      
      {sampleDocuments.length > 0 ? (
        <FlatList
          data={sampleDocuments}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          className="mt-2"
        />
      ) : (
        <Text className="text-gray-700 mt-2">No documents available</Text>
      )}
    </View>
  );
}

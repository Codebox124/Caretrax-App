import React from 'react';
import { View, Text, FlatList } from 'react-native';

type Medication = {
  id: string;
  name: string;
  dosage: string;
  time: string;
  instructions: string;
};

const sampleMedications: Medication[] = [
  { id: '1', name: 'Aspirin', dosage: '100mg', time: '8:00 AM', instructions: 'Take with food.' },
  { id: '2', name: 'Metformin', dosage: '500mg', time: '12:00 PM', instructions: 'Take after lunch.' },
  { id: '3', name: 'Ibuprofen', dosage: '200mg', time: '6:00 PM', instructions: 'Take only if experiencing pain.' },
];

export default function Medications() {
  const renderItem = ({ item }: { item: Medication }) => (
    <View className="bg-white p-4 mb-2 rounded-lg shadow-sm">
      <Text className="text-base font-bold text-gray-900">{item.name}</Text>
      <Text className="text-sm text-gray-700 mt-1">Dosage: {item.dosage}</Text>
      <Text className="text-sm text-gray-700">Time: {item.time}</Text>
      <Text className="text-sm text-gray-500 mt-1">Instructions: {item.instructions}</Text>
    </View>
  );

  return (
    <View className=" mb-4 rounded-lg ">
     
      {sampleMedications.length > 0 ? (
        <FlatList
          data={sampleMedications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          className="mt-2"
        />
      ) : (
        <Text className="text-gray-700 mt-2">No medications available</Text>
      )}
    </View>
  );
}

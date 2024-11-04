import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Define the type for task items
type Task = {
  id: string;
  title: string;
  status: 'Pending' | 'Completed' | 'In Progress';
};

// Sample data for tasks
const sampleTasks: Task[] = [
  { id: '1', title: 'Administer medication', status: 'Pending' },
  { id: '2', title: 'Assist with bathing', status: 'Completed' },
  { id: '3', title: 'Prepare meals', status: 'In Progress' },
  { id: '4', title: 'Administer medication', status: 'Pending' },
  { id: '5', title: 'Assist with bathing', status: 'Completed' },
  { id: '6', title: 'Prepare meals', status: 'In Progress' },
  { id: '7', title: 'Prepare meals', status: 'In Progress' },
];

// Component for rendering tasks
export default function Tasks() {
  // Render each task item
  const renderItem = ({ item }: { item: Task }) => (
    <View className="bg-white p-4 mb-4 rounded-lg shadow-md flex-row items-center">
      <View className="ml-3 flex-1">
        <Text className="text-lg font-bold">{item.title}</Text>
        <Text
          className={`text-sm mt-1 ${
            item.status === 'Completed'
              ? 'text-green-500'
              : item.status === 'Pending'
              ? 'text-yellow-500'
              : 'text-blue-500'
          }`}
        >
          {item.status}
        </Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="access-time" size={20} color="#3b82f6" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="mb-6">
      {sampleTasks.length > 0 ? (
        <FlatList
          data={sampleTasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          className="mt-2"
        />
      ) : (
        <Text className="text-gray-700 mt-2">No tasks available</Text>
      )}
    </View>
  );
}

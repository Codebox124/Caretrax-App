import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Overview() {
    const { entry } = useLocalSearchParams();
    const parsedEntry = entry ? JSON.parse(entry) : {};

    return (
        <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100 p-2">
            {/* Status Section */}
            <View className="bg-white p-4 mb-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                <View className="flex flex-row items-center mb-2">
                    <MaterialIcons name="info" size={24} color="blue" className="mr-2" />
                    <Text className="text-lg font-semibold text-gray-700">Status</Text>
                </View>
                <Text className="text-lg font-medium text-gray-800 mt-1">Pending</Text>
                <View className="flex-row justify-between mt-4">
                    <View>
                        <Text className="text-gray-600 font-medium">Checked In:</Text>
                        <Text className="text-gray-500">N/A</Text>
                    </View>
                    <View>
                        <Text className="text-gray-600 font-medium">Checked Out:</Text>
                        <Text className="text-gray-500">N/A</Text>
                    </View>
                </View>
            </View>

            {/* Name Section */}
            <View className="bg-white p-4 mb-6 rounded-lg shadow-lg">
                <View className="flex flex-row items-center mb-2">
                    <MaterialIcons name="person" size={24} color="green" className="mr-2" />
                    <Text className="text-lg font-semibold text-gray-700">{parsedEntry.name}</Text>
                </View>
                <Text className="text-gray-600 font-medium">Age 54</Text>
            </View>

            {/* Address Section */}
            <View className="bg-white p-4 mb-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <View className="flex flex-row items-center mb-2">
                    <MaterialIcons name="home" size={24} color="red" className="mr-2" />
                    <Text className="text-lg font-semibold text-gray-700">Address</Text>
                </View>
                <Text className="text-gray-700 mt-1 leading-6">
                    18 Triangle Place{"\n"}
                    Clapham{"\n"}
                    London{"\n"}
                    SW4 7HS
                </Text>
                <TouchableOpacity className="mt-4 bg-blue-600 py-2 px-4 rounded-lg">
                    <Text className="text-center text-white font-medium">Open in Maps</Text>
                </TouchableOpacity>
            </View>

            {/* Access Info Section */}
            <View className="bg-white p-4 mb-6 rounded-lg shadow-lg">
                <View className="flex flex-row items-center mb-2">
                    <MaterialIcons name="lock" size={24} color="orange" className="mr-2" />
                    <Text className="text-lg font-semibold text-gray-700">Access Info</Text>
                </View>
                <Text className="text-gray-700 mt-1">No access info</Text>
            </View>
        </ScrollView>
    );
}

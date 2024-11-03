import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RotaDetails() {
  const { entry } = useLocalSearchParams();
  const parsedEntry = entry ? JSON.parse(entry) : {}; // Parse entry data

  return (
    <SafeAreaView className="flex-1 bg-white p-4 ">
      <Text className="text-xl font-bold">Name: {parsedEntry.name}</Text>
      <Text className="text-lg text-gray-700">Task: {parsedEntry.task}</Text>
      <Text className="text-lg text-gray-700">Time: {parsedEntry.time}</Text>
      <Text className="text-lg text-gray-700">
        Duration: {parsedEntry.duration}
      </Text>
      {/* Additional content can go here, such as nested tabs */}
    </SafeAreaView>
  );
}

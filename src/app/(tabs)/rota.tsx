import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const scheduleData = [
  {
    date: "Tuesday, 2 July 2019",
    entries: [
      {
        id: "1",
        time: "10:40",
        duration: "1h 5m",
        name: "Dawn Collis (DC)",
        task: "Client Respite",
      },
    ],
  },
  {
    date: "Wednesday, 3 July 2019",
    entries: [
      {
        id: "1",
        time: "10:00",
        duration: "30m",
        name: "Dustin Johnson",
        task: "Personal Care",
      },
    ],
  },
  {
    date: "Thursday, 4 July 2019",
    entries: [
      {
        id: "1",
        time: "09:30",
        duration: "15m",
        name: "Herbie Baker",
        task: "Meal Prep",
      },
      {
        id: "2",
        time: "10:00",
        duration: "30m",
        name: "Dustin Johnson",
        task: "Personal Care",
      },
      {
        id: "3",
        time: "17:10",
        duration: "55m",
        name: "Office",
        task: "",
      },
      {
        id: "4",
        time: "20:30",
        duration: "1h",
        name: "Apple Client",
        task: "Personal Care\nWith Nick Langley",
      },
      
    ],
  },
];

export default function Rota() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-500 py-4">
        <Text className="text-center text-white text-xl font-semibold">Jul 2019</Text>
      </View>

      <View className="flex-1 p-4">
        <FlatList
          data={scheduleData}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View className="mb-4">
              {/* Date Section */}
              <Text className="text-sm font-semibold text-gray-500 mb-2 uppercase">
                {item.date}
              </Text>

              {/* Entries for the Day */}
              {item.entries.map((entry) => (
                <Link
                  key={entry.id}
                  href={{
                    pathname: "/RotaDetails",
                    params: {
                      entry: JSON.stringify(entry),
                    },
                  }}
                  asChild
                >
                  <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
                    <Text className="text-gray-500 mr-4 w-16 text-center">
                      {entry.time}{"\n"}
                      <Text className="text-xs text-gray-400">{entry.duration}</Text>
                    </Text>

                    <View className="flex-1 border-l-2 border-gray-200 pl-4">
                      <Text className="text-base font-semibold text-gray-800">
                        {entry.name}
                      </Text>
                      {entry.task && (
                        <Text className="text-sm text-gray-500 mt-1">
                          {entry.task}
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

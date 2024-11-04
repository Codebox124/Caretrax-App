import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Overview from "@/components/Rotadetails/Overview";
import Tasks from "@/components/Rotadetails/Task";
import Notes from "@/components/Rotadetails/Notes";
import Documents from "@/components/Rotadetails/Documents";
import Medications from "@/components/Rotadetails/Medications";

type ParsedEntry = {
  name?: string;
  task?: string;
  time?: string;
  duration?: string;
};

type Tab = "OVERVIEW" | "TASKS" | "MEDICATIONS" | "NOTES" | "DOCUMENTS";

interface HeaderProps {
  name?: string;
  task?: string;
  time?: string;
  duration?: string;
}

function Header({ name, task, time, duration }: HeaderProps) {
  return (
    <View className="bg-blue-600 p-4 m-4 rounded-lg shadow-lg">
      <Text className="text-gray-200 text-base font-semibold text-center mb-1">
        July 2019
      </Text>
      <Text className="text-white text-3xl font-extrabold text-center mb-2">
        {name}
      </Text>
      <Text className="text-gray-200 text-lg text-center mb-1">{task}</Text>
      <Text className="text-gray-300 text-md text-center mb-1">
        {time} ({duration})
      </Text>
      <Text className="text-gray-400 text-sm text-center italic">
        Tuesday, 02 July 2019
      </Text>
    </View>
  );
}

interface TabNavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

// Tab Navigation Component
function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const tabs: Tab[] = ["OVERVIEW", "TASKS", "MEDICATIONS", "NOTES", "DOCUMENTS"];
  return (
    <View className="bg-gray-200 p-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row justify-around">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              className="mx-3"
              onPress={() => setActiveTab(tab)}
            >
              <Text
                className={
                  activeTab === tab ? "text-blue-600 font-bold" : "text-gray-600"
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Main Component
export default function RotaDetails() {
  const { entry } = useLocalSearchParams();
  const parsedEntry: ParsedEntry = entry ? JSON.parse(entry) : {};

  const [activeTab, setActiveTab] = useState<Tab>("OVERVIEW");

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "OVERVIEW":
        return <Overview />;
      case "TASKS":
        return <Tasks />;
      case "NOTES":
        return <Notes />;
      case "DOCUMENTS":
        return <Documents />;
      case "MEDICATIONS":
        return <Medications />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <Header
        name={parsedEntry.name}
        task={parsedEntry.task}
        time={parsedEntry.time}
        duration={parsedEntry.duration}
      />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Section */}
      <ScrollView showsVerticalScrollIndicator={false} className="p-4">{renderTabContent()}</ScrollView>
    </SafeAreaView>
  );
}

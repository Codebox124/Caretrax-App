import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TabBar from '@/components/TabBar'
export default function TabsLayout() {
  return (
    <Tabs
     
      screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: true }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rota"
        options={{
          headerTitle: "Rota",
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-today" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

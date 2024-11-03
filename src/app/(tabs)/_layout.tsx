import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: true }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rota"
        options={{
          headerTitle: "Rota",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-today" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

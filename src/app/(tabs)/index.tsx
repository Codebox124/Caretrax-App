import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';

export default function Home() {

  const appointments = [
    { id: '1', date: 'Nov 19, 2023', time: '12:56 PM', name: 'Dr. Kenny Adeola', role: 'General Practitioner' },
    { id: '2', date: 'Nov 20, 2023', time: '11:00 AM', name: 'Dr. Mary Roberts', role: 'Physiotherapist' },
    { id: '3', date: 'Nov 21, 2023', time: '2:00 PM', name: 'Dr. Steven Clark', role: 'Psychiatrist' },
    { id: '4', date: 'Nov 19, 2023', time: '9:09 AM', name: 'Dr. Kenny Adeola', role: 'General Practitioner' },
    { id: '5', date: 'Nov 20, 2023', time: '11:00 AM', name: 'Dr. Mary Roberts', role: 'Physiotherapist' },
    { id: '6', date: 'Nov 21, 2023', time: '9:14 AM', name: 'Dr. Steven Clark', role: 'Psychiatrist' },
  ];

  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(formattedTime);
    };

    updateTime(); 
    const intervalId = setInterval(updateTime, 60000); 

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <SafeAreaView className="flex-1 px-4 bg-gray-100">



      {/* Header */}
      <View className="flex-row items-center   justify-between mb-4">
        <View>
          <Text className="text-lg text-gray-500">Hi, Codebox</Text>
          <Text className="text-2xl font-bold">How are you today?</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="notifications-none" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Summary Section */}
        <View className="flex-row justify-around mt-6 items-center mb-4">

          <View className="items-center">
            <Progress.Circle
              size={100}
              progress={0.7}
              thickness={8}
              color="#4CAF50"
              showsText={true}
              formatText={() => '£700'}
            />
            <Text className="text-center mt-2 text-lg font-semibold">Total Cash Made</Text>
          </View>

          {/* Circular Chart for Total Hours Worked */}
          <View className="items-center">
            <Progress.Circle
              animated
              size={100}
              progress={0.8}
              thickness={8}
              color="#2196F3"
              showsText={true}
              formatText={() => '80 hrs'}
            />
            <Text className="text-center mt-2 text-lg font-semibold">Total Hours Worked</Text>
          </View>
        </View>

        <Text className="text-lg mt-6 font-bold text-gray-800 mb-2">Upcoming Appointment</Text>
        <View>
          {appointments.map((rota) => (
            <View key={rota.id}
             style={{
              backgroundColor: rota.time === currentTime ? '#3b82f6' : '#fff', 
              }} 
              className="flex-row items-center p-4 mb-2 rounded-lg shadow-sm">
              <View className="flex-1">
                <Text className="text-sm font-bold text-gray-800">{rota.date} - {rota.time}</Text>
                <Text className="text-lg font-semibold text-gray-900">{rota.name}</Text>
                <Text className="text-gray-600">{rota.role}</Text>
              </View>
              <Text
                style={{
                  color: rota.time === currentTime ? '#3b82f6' : '#333', 
                  fontWeight: rota.time === currentTime ? 'bold' : 'normal',
                }}
              >
                {rota.time}
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="arrow-forward" size={24} color="#3b82f6" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>




    </SafeAreaView>
  );
}

import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCrad from '../components/NavigateCrad'
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {

  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCrad"
            component={NavigateCrad}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
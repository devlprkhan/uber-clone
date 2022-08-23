import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'

const MapScreen = () => {
  return (
    <View>
      <View class="h-1/2">
        <Map />
      </View>
      <View class="h-1/2">
        <Text>jkghjkh</Text>
      </View>
    </View>
  )
}

export default MapScreen
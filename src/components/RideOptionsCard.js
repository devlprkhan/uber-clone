import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../../redux/slices/navSlice'
import 'intl';
import "intl/locale-data/jsonp/en";


const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]

// if we have SURGE pricing this goes up
const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCrad")}
          className="absolute top-1 left-5 p-3 rounded-full z-50"
        >
          <Icon
            name='chevron-left'
            type='fontaweasome'
          />
        </TouchableOpacity>
        <Text className="text-center py-3 text-xl">Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            className="flex-row justify-between items-center px-6"
            style={id === selected?.id && { backgroundColor: '#0002' }}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text className="text-xl">
              {/* // Formula to get Estimated Price */}
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className="bg-black py-2 m-2"
          style={!selected && { backgroundColor: '#0003' }}
        >
          <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard
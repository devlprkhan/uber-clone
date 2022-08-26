import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
// Google API
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// API KEY from .env File
import { GOOGLE_MAPS_APIKEY } from "@env"
// Redux
import { useDispatch } from 'react-redux';
import { setDestination } from '../../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourite';
import { Icon } from 'react-native-elements';

const NavigateCrad = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Haseeb Khan</Text>
      <View className="border-t border-gray-200 flex-shrink">
            <View>
                <GooglePlacesAutocomplete 
                styles={{
                    container: {
                        flex: 0,
                        backgroundColor: "white",
                        paddingTop: 20,
                      },
                      textInput: {
                        backgroundColor: "#DDDDDF",
                        fontSize: 18,
                      },
                      textInputContainer: {
                        paddingHorizontal: 20,
                        paddingBottom: 0
                      }}}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    navigation.navigate("RideOptionsCard")
                }}
                placeholder='Where to?'
                nearbyPlacesAPI='GooglePlaceSearch'
                debounce={400}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                returnKeyType={"search"}
                minLength={2}
                />
            </View>
            <NavFavourite />
      </View>

      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity 
        className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon 
          name='car'
          type='font-awesome'
          color="white"
          size={16}
          />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className="flex flex-row justify-between w-24 px-4 py-3 rounded-full"
        >
          <Icon 
          name="fast-food-outline"
          type="ionicon"
          color="black"
          size={16}
          />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCrad
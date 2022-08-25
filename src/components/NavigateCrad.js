import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
// Google API
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// API KEY from .env File
import { GOOGLE_MAPS_APIKEY } from "@env"
// Redux
import { useDispatch } from 'react-redux';
import { setDestination } from '../../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';

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
      </View>
    </SafeAreaView>
  )
}

export default NavigateCrad
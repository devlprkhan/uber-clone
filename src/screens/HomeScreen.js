import { View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
// Google API
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// API KEY from .env File
import { GOOGLE_MAPS_APIKEY } from "@env"
// Redux
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../redux/slices/navSlice';

const HomeScreen = () => {

  const dispatch = useDispatch()

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            )
            setDestination(null)
            console.log(details.geometry.location);
            console.log(details.description);
            
          }}
          returnKeyType={"Search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}

        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
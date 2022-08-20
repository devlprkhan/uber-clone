import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

import {useNavigation} from "@react-navigation/native"


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]

const NavOptions = () => {

    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-md"
                    onPress={() => navigation.navigate(item.screen)}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{ height: 120, width: 120, resizeMode: "contain" }}
                        />
                        <Text className="py-2 font-semibold text-lg">{item.title}</Text>
                        <Icon
                            className="p-2 bg-black rounded-full w-10 mt-4"
                            name='arrowright'
                            color="white"
                            type='antdesign'
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions
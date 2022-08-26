import { KeyboardAvoidingView, Platform } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// react redux
import { store } from "./redux/store"
import { Provider } from 'react-redux'
// Screens
import HomeScreen from './src/screens/HomeScreen';
import EatScreen from './src/screens/EatScreen';
import MapScreen from './src/screens/MapScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <KeyboardAvoidingView 
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="MapScreen" component={MapScreen} />
              <Stack.Screen name="EatsScreen" component={EatScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}


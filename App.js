import { StyleSheet } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";

// react redux
import { store } from "./redux/store"
import { Provider } from 'react-redux'
// Screens
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <HomeScreen />
      </TailwindProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

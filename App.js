import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FirstLoad from './screens/FirstLoad';
import WelcomePage from './screens/Welcom/WelcomePage';
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './components/Stack/AuthStack';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './constants/style';
import * as Font from 'expo-font';
// import Home from './screens/Home/Home';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';





<NavigationContainer>
  {<AuthStack />}
</NavigationContainer>



// function Root() {
//   const [isTryingLoging, setIsTryingLoging] = useState(false);



//   if (isTryingLoging) {
//     return <Apploading />
//   }
//   return <Navigation />

// }



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={Colors.color.primary} />
      <NavigationContainer>
        {<AuthStack />}
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

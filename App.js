import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FirstLoad from './screens/FirstLoad';
import Login from './screens/Login';
import { useFonts } from 'expo-font';


export default function App() {
  let screen = <FirstLoad />


  const [loading, setLoading] = useState(false)
  const [fontsLoaded] = useFonts({
    // 'neo-latin': require('./assets/fonts/neo-latina.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(true)
  //   },4000)
  // })

  

  return (
    <View style={styles.container}>
      {/* <FirstLoad />
      <Login /> */}
      {/* {loading ? <Login /> : <FirstLoad />} */}
      <Login />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

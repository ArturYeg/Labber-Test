import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Colors } from "../constants/style";
import ButtonContainer from "../components/ui/ButtonContainer";
import Language from "../components/ui/Language";
import {useFonts,Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto';




function Login() {
    const handleSelected = (value) => {
        console.log(value);
      }


    useFonts({
        Roboto_500Medium,
        Roboto_400Regular,
      });

     
    return (
        <View style={styles.container}>
            <View style={styles.topScreen}>
                <View style={styles.logo}>
                    <Image source={require('../assets/images/logo-horizontal.png')} />
                </View>

                <View style={styles.desc}>
                    <Image source={require('../assets/images/easy.png')} style={styles.img}  />
                    <Image style={[styles.middle, styles.img]} source={require('../assets/images/fast.png')} />
                    <Image source={require('../assets/images/reliable.png')} style={styles.img} resizeMode='cover' />
                </View>

                <Language onSelect={handleSelected}/>

            </View>

            <ButtonContainer  />
        </View>
    )
}

export default Login;
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        marginTop: 168,
        paddingBottom: 137,
    },
    middle: {
        marginVertical: 24
    },

    topScreen: {
        backgroundColor: Colors.color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        borderBottomEndRadius: 12,
        borderBottomLeftRadius: 12,
    },
    desc: {
        // marginVertical: 24,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 104.2,
    },
    img: {
        width: deviceWidth,
    },



})
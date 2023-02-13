import { StyleSheet, View, Image, Dimensions, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Colors } from "../../constants/style";
import Language from "../../components/ui/Language";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";


let { width, height } = Dimensions.get('window')




const WelcomePage = () => {

   
    let [fontsLoaded]= useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      }); 
    
    // if (!fontsLoaded) {
    //     return null;
    //   }

    const navigation = useNavigation();
    const toLoginPage = () => {
        navigation.navigate('LoginPage')
    }

    const toNewAccount = () => {
        navigation.navigate("SignUpPage")


    }
    const handleSelected = (value) => {
        console.log(value);
    }


    


    return (
        <View style={styles.container}>
            <View style={styles.topScreen}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/logo-horizontal.png')} />
                </View>

                <View style={styles.desc}>
                    <Image source={require('../../assets/images/easy.png')} style={styles.img} />
                    <Image style={[styles.middle, styles.img]} source={require('../../assets/images/fast.png')} />
                    <Image source={require('../../assets/images/reliable.png')} style={styles.img} resizeMode='cover' />
                </View>

                <Language onSelect={handleSelected} />

            </View >

           <View style={styles.buttonsContainer}>
                <View >
                    <PrimaryButton size={width / 100 * 90}
                        text="NEW ACCOUNT"

                        onPress={toNewAccount} />
                </View>
                <View style={styles.secondbutton}>
                    <SecondaryButton
                        text="LOGIN"
                        textStyle={[{ color: "#24223F", fontFamily: 'Roboto_500Medium' }]} 
                        onPress={toLoginPage}/>
                </View>
            </View>

        </View>
    )
}

export default WelcomePage;


// let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {     
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    logo: {
        marginTop: 168,
        paddingBottom: 75,
    },
    middle: {
        marginVertical: 24
    },
    topScreen: {
        backgroundColor: Colors.color.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        borderBottomEndRadius: 12,
        borderBottomLeftRadius: 12,
        flex: 1,
    },
    desc: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 96,
    },
    img: {
        width: width,
    },
    buttonsContainer: {
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    
})
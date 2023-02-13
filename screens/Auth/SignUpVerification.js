import { View, Text, SafeAreaView, Platform, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";
import { useNavigation } from '@react-navigation/native';
import {useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';


import { Colors } from "../../constants/style";
import CodeInput from "./CodeInput";

const { width, height } = Dimensions.get('window')


function SignUpVerification({ route }) {
    const navigation = useNavigation()

    const [counter, setCounter] = useState(5);

    let [fontsLoaded]= useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      }); 
    
    // if (!fontsLoaded) {
    //     return null;
    //   }

   

    useEffect(() => {
        if (route.name == 'SignUpVerification' && counter > 0) {
            setTimeout(
                () => setCounter((counter) => counter - 1), 1000);
        }
        
    }, [counter]);

    const toLoginPage = () => {
        navigation.navigate('LoginPage')
    }
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {fontsLoaded ? <>
                <View  >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 40, height: 40, borderLeftWidth: 2, borderLeftColor: '#3A3855', borderTopWidth: 2, borderLeftColor: '#3A3855' }}></View>
                        <View style={{ width: 40, height: 40, borderRightWidth: 2, borderRightColor: '#3A3855', borderTopWidth: 2, borderRightColor: '#3A3855' }}></View>
                    </View>
                    <View>
                        <Text style={styles.titleTextFirst} >Have you received the verification code?</Text>

                        <Text style={{ marginBottom: 68 }} >We sent an SMS to your mobile number ********62 </Text>
                    </View>

                    <Text style={{ marginBottom: 8 }}>Enter 6 digits code</Text>

                    <CodeInput />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 40, height: 40, borderLeftWidth: 2, borderLeftColor: '#3A3855', borderBottomWidth: 2, borderLeftColor: '#3A3855' }}></View>
                        <View style={{ width: 40, height: 40, borderRightWidth: 2, borderRightColor: '#3A3855', borderBottomWidth: 2, borderRightColor: '#3A3855' }}></View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        text={counter > 0 ? counter : "RESEND CODE"  }
                        style={styles.newAccount}
                        opacity={counter > 0 ? 0.5 : 1}
                        disabled={counter > 0 ? true : false}

                    />
                    <SecondaryButton 
                    text='I HAVE AN ACCOUNT' 
                    style={styles.secondaryBtn} 
                    onPress={toLoginPage} />
                </View>
            </> : null}
        </KeyboardAvoidingView>
    )
}

export default SignUpVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 100,
        paddingBottom: 40,

    },
    titleTextFirst: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 24,
        // marginBottom: 12,
        paddingBottom: 12,
        marginTop: 50,

    },
    inputContainer: {
        flexDirection: 'row', borderRadius: 4,
        borderColor: Colors.color.inputBox,
        borderWidth: 1,
        fontSize: 16,
        width: '100%',
        height: 56,
        marginBottom: 60,


        // paddingLeft:16,
        // paddingRight:12


    },
    phoneCode: {
        marginVertical: 16,
        marginLeft: 16,
        marginRight: 12,
        fontSize: 16,
        color: "#575670"

    },

    input: {
        borderLeftWidth: 0,
        width: '100%',
        borderRadius: 4,
        // borderColor: Colors.color.inputBox,
        // borderWidth: 1,
        height: 56,
        fontSize: 16
    },
    secondaryBtn: {
        marginTop: 16,
    },
    buttonContainer: {
        // width: width,
        // // paddingHorizontal: 40,
        // // paddingVertical: 20,
        justifyContent: 'flex-end',
        flex: 1,
        // backgroundColor: 'grey'   
    },
})
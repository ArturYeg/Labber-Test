import { View, StyleSheet, Text, Dimensions, Sa } from "react-native";
import PrimaryButton from "../PrimaryButton";
import {useFonts,Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto';




function ButtonContainer() {

    useFonts({
        Roboto_500Medium,
        Roboto_400Regular,
      });
    
    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.firstButton}>
                <PrimaryButton ><Text style={[styles.firstButtonText,]}>NEW ACCOUNT</Text></PrimaryButton>
            </View>
            <View style={styles.secondbutton}>
                <PrimaryButton ><Text style={styles.secondbuttonText}>LOGIN</Text></PrimaryButton>
            </View>
        </View>
    )
}

export default ButtonContainer

const deviceWidht = Dimensions.get('window').width

const styles = StyleSheet.create({
    buttonsContainer: {
        // backgroundColor: 'grey',
        width: deviceWidht,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,


    },

    firstButton: {
        backgroundColor: '#1C1B2D',
        borderRadius: 6,
        marginBottom: 16
    },
    firstButtonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        color: 'white'
    },
    buttonAccount: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        color: '#24223F',
        fontStyle: 'normal',

    }
})
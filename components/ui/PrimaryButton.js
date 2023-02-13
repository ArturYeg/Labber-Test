import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/style";

import {useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';



function PrimaryButton(props) {
    
    let [fontsLoaded]= useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      }); 
    
    // if (!fontsLoaded) {
    //     return null;
    //   }

    return (
        <>{fontsLoaded ?
        <Pressable
            disabled={props.disabled}
            opacity={props.opacity}
            onPress={props.onPress}
            style={({ pressed }) =>
                pressed
                    ? [styles.button, styles.pressed]
                    : styles.button}>
            <Text style={[props.textStyle, styles.text]}>{props.text}</Text>
        </Pressable> : null}
        </>



    )
}

export default PrimaryButton;


const styles = StyleSheet.create({

    button: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#24223F',
        backgroundColor: Colors.color.primary,
        width: '100%',


    },
    text: {
        color: '#FEFEFE',
        fontSize: 14,
        fontFamily: 'Roboto_500Medium'
    },


    pressed: {
        opacity: 0.5,
    }
})
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/style";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';


function SecondaryButton(props) {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    // if (!fontsLoaded) {
    //     return null;
    //   }
    return (
        <>
            {fontsLoaded ? <Pressable
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

export default SecondaryButton;


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
        marginTop: 16,
        // width:320,
    },
    text: {
        color: Colors.color.primary,
        fontSize: 14,
        fontFamily: 'Roboto_500Medium'
    },

    pressed: {
        opacity: 0.5,
    }
})
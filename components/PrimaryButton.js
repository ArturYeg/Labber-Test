import { Pressable, StyleSheet, Text} from "react-native";

function PrimaryButton({ children,style }) {
    return (
        <Pressable
            style={({ pressed }) =>
                pressed
                    ? [styles.button, styles.pressed]
                    : styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    


    )
}

export default PrimaryButton;


const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#24223F',
        overflow:'hidden',
        width:'100%'

    },
    
    pressed: {
        opacity: 0.5,
    }
})
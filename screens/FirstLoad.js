import { Image, StyleSheet, View } from "react-native";
import { Colors } from "../constants/style";

function FirstLoad() {
    return (
        <View style={styles.rootScreen}>
            <Image
                //  style={styles.rootScreen} 
                source={require('../assets/images/logo.png')} />
        </View>
    )
}

export default FirstLoad

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: Colors.color.primary,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
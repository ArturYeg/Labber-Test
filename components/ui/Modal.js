import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from 'react-native-modalbox';



function ModalPopUp(props) {
    // const [isOpen, setIsOpen] = useState(false)
    return (
        <View style={styles.container}>
            <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={false}>
                <Text style={styles.text}>Modal centered</Text>
                
            </Modal>
        </View>
    )
}

export default ModalPopUp;

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'grey'
    }
})
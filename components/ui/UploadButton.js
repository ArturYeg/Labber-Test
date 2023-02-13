import { Pressable, StyleSheet, Text, View } from "react-native";
import Upload from '../../assets/upload.svg';
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import {useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';



function UploadButton(props) {

    const [image, setImage] = useState([]);


    

    let [fontsLoaded]= useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      }); 
    
    // if (!fontsLoaded) {
    //     return null;
    //   }

    const selectImage=async()=>{
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
          });

        //   console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

      };
    return (
        <Pressable style={({ pressed }) =>
            pressed
                ? [styles.container, styles.pressed]
                : styles.container}
            onPress={selectImage}
            image={image}>


            <Upload />


            <Text style={styles.buttonText} >{props.text}</Text>

        </Pressable>
    )
}

export default UploadButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderStyle: 'dashed',
        borderColor: '#2199DD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 6,

    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#2199DD',
        marginLeft: 6

    },
    pressed: {
        opacity: 0.5,
    }
})
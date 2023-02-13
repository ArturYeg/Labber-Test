import { StyleSheet, Text, View, Dimensions, SafeAreaView, ImageBackground, Image, Alert } from "react-native";
import { useState, useEffect } from "react";
import {useFonts,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';

import Bag from '../../assets/bag.svg';
import { Colors } from "../../constants/style";
import UploadButton from "../../components/ui/UploadButton";
import NavBar from "../../components/ui/NavBar";
import ImageCarousel from "../../components/ui/Slider";
// import * as ImagePicker from 'expo-image-picker';
import Close from '../../assets/close.svg'
// import Modal from "../../components/ui/Modal";
// import ModalPopUp from "../../components/ui/Modal";




const { width, height } = Dimensions.get('window');



function Home(props) {

    const [isOpen, setIsOpen] = useState(false)
    let [fontsLoaded]= useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
      }); 
    
    // if (!fontsLoaded) {
    //     return null;
    //   }
    // const [image, setImage] = useState(null);


    

    // const selectImage=async()=>{
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         // mediaTypes: MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //       });

    //       console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }

    return (<>
        {fontsLoaded ?
            <View style={styles.container}>
                {/* <View style={styles.topBar}>
                    <View>
                        <Text style={styles.userName}>Բարև Արմինե</Text>
                    </View>

                    <View style={styles.testCountContainer}>
                        <View >
                            <Text style={styles.count}>0</Text>
                        </View>
                        <View >
                            <Bag style={styles.bagIcon} />
                        </View>
                    </View>
                </View> */}
                <View style={{ paddingHorizontal: 20, paddingTop: 98 }} >
                    <ImageBackground source={require('../../assets/helper.png')} style={styles.background}
                        imageStyle={{ resizeMode: 'cover', width: '100%', alignItems: 'flex-end' }}
                    >
                        <View style={styles.helpContainer} >
                            {/* <View style={styles.text}> */}

                            <Text style={styles.titleText}>Օգնիր ինձ պատվիրել</Text>

                            <Text style={styles.descText}>
                                Եթե չգիտես թե ինչ թեստեր
                                են անհրաժեշտ կամ ունես
                                օգնության կարիք ներբեռնիր
                                բժշկի ցուցումները և մենք
                                կգրանցենք թեստերը
                            </Text>
                            {/* </View> */}

                        </View>
                    </ImageBackground>


                    <View style={{ marginTop: 14 }}>
                        <UploadButton text='Ներբեռնել բժշկի ցուցումները (jpeg, pdf)' />

                        <View style={styles.uploadFiles}>
                            <Text>126nkar.jpeg</Text>
                            <Close />
                        </View>

                        {/* {props.image && <Image source={{ uri: props.image }} style={{ width: 200, height: 20 }} />} */}
                    </View>
                    <View style={{ marginTop: 100 }}>
                        <Text>Laboratories</Text>
                        <View style={{ marginTop: 16 }}>
                            <ImageCarousel />
                        </View>
                    </View>
                </View>

                {/* <NavBar /> */}
            </View> : null}</>)

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // paddingTop: 98,
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    topBar: {
        // flex: 1,
        backgroundColor: Colors.color.primary,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 100,
        // minHeight:92,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 20,
        paddingBottom: 19,
        paddingTop: 55,
    },
    userName: {
        color: '#fefefe',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular'
    },
    testCountContainer: {
        flexDirection: 'row',
        backgroundColor: '#3A3855',
        paddingLeft: 6,
        paddingBottom: 5.13,
        paddingRight: 8.5,
        paddingTop: 4.5,
        borderRadius: 6,
    },
    count: {
        color: '#fefefe'
    },
    bagIcon: {
        marginLeft: 8.5,
    },


    helpContainer: {
        width: '100%',
        // paddingTop:150,
        paddingRight: 140,
        // height:150
    },
    background: {
        paddingTop: 60,
        // flex:0.5,
        // backgroundColor: 'grey',
        // justifyContent:'flex-end'
    },
    text: {
        // paddingTop: 98
        // marginBottom: 16,
        // marginTop:20

    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        color: Colors.color.primary,
    },
    descText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: Colors.color.primary,
        marginTop: 12,
        // width: 220,
        marginBottom: 16,
    },

    uploadFiles: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 26,
        alignItems:'center'
    }
})
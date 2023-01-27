import { useState } from 'react';
import { View, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native'

function Language({onSelect}) {

    const [selectButton, setSelectedButton] = useState('am')



    return (


        <View style={styles.languagecontainer}>
            <TouchableOpacity
                style={[styles.languagebtn, selectButton === 'en' ? styles.selected : null]}
                onPress={() => {
                    setSelectedButton('en')
                    onSelect('en')
                }}>
                <Image source={require('../../assets/language/en.png')}></Image>

            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.languagebtn, styles.middleIcon, selectButton === 'am' ? styles.selected : null]}
                onPress={() => {
                    setSelectedButton('am')
                    onSelect('am')
                }} >
                <Image source={require('../../assets/language/am.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.languagebtn, selectButton === 'ru' ? styles.selected : null]}
                onPress={() => {
                    setSelectedButton('ru')
                    onSelect('ru')
                }}>
                <Image source={require('../../assets/language/ru.png')}></Image>
            </TouchableOpacity>
        </View>




    )
}

export default Language;

const styles = StyleSheet.create({
    languagecontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    languagebtn: {
        borderRadius: 6,
        padding: 6.4,
        // borderWidth: 1,
        // borderColor: '1C1B2D',

    },
    middleIcon: {
        marginHorizontal: 24
    },
    selected: {
        borderColor: '#575670',
        borderWidth: 1,
    }
}
)
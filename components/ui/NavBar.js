import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import HomeIcon from '../../assets/navbarsvg/HomeIcon.svg';
import BookIcon from '../../assets/navbarsvg/BookIcon.svg';
import AddIcon from '../../assets/navbarsvg/AddIcon.svg';
import SubscriptionIcon from '../../assets/navbarsvg/SubscriptionIcon.svg';
import ProfileIcon from '../../assets/navbarsvg/ProfileIcon.svg';

import { Colors } from "../../constants/style";
import { useState } from "react";


function NavBar() {

    const [selected, setSelected] = useState('HomeIcon')

    return (
        <View style={styles.container}>
            
            <TouchableWithoutFeedback
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setSelected('HomeIcon')}>
                <View style={styles.iconContainer}>
                    <HomeIcon name='HomeIcon' stroke={selected === 'HomeIcon' ? '#fefefe' : "#2199DD"} />
                    <View style={[styles.point, selected === 'HomeIcon' ? styles.selected : null]}></View>
                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setSelected('BookIcon')}>
                <View style={styles.iconContainer}>
                    <BookIcon name='BookIcon' stroke={selected === 'BookIcon' ? '#fefefe' : "#2199DD"} />
                    <View style={[styles.point, selected === 'BookIcon' ? styles.selected : null]}></View>

                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setSelected('AddIcon')}>
                <View style={styles.iconContainer}>
                    <AddIcon name='AddIcon' stroke={selected === 'AddIcon' ? '#fefefe' : "#2199DD"} />
                    <View style={[styles.point, selected === 'AddIcon' ? styles.selected : null]}></View>

                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setSelected('SubscriptionIcon')}>
                <View style={styles.iconContainer}>
                    <SubscriptionIcon name='SubscriptionIcon' stroke={selected === 'SubscriptionIcon' ? '#fefefe' : "#2199DD"} />
                    <View style={[styles.point, selected === 'SubscriptionIcon' ? styles.selected : null]}></View>

                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setSelected('ProfileIcon')}>
                <View style={styles.iconContainer}>
                    <ProfileIcon name='ProfileIcon' stroke={selected === 'ProfileIcon' ? '#fefefe' : "#2199DD"} />
                    <View style={[styles.point, selected === 'ProfileIcon' ? styles.selected : null]}></View>

                </View>
            </TouchableWithoutFeedback>


        </View>
    )
}

export default NavBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.color.primary,
        marginHorizontal: 26,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 16,
        // height: 60,

    },
    point: {
        width: 3,
        height: 3,
        borderRadius: 6,
        // borderWidth:1,
        marginTop: 7.75,
    },
    iconContainer: {
        width: 36,
        height: 36,
        marginTop: 7.26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#fefefe',
    },

})
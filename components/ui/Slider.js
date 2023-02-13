import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Diagen from '../../data/Diagen.png';
import Dialab from '../../data/Dialab.png';
import EcoSense from '../../data/EcoSense.png';
import PromTest from '../../data/PromTest.png';


const images = [
    Dialab,
    Diagen,
    EcoSense,
    PromTest,
    Dialab,
    Diagen,
    EcoSense,
    PromTest,
];



const ImageCarousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setSelectedIndex(selectedIndex => (selectedIndex + 1) % images.length);
    //     }, 2000);
    //     return () => clearInterval(intervalId);
    //   }, []);

    return (
        <View>
            <FlatList

                style={{ backgroundColor: '#EFEDF4' }}

                horizontal
                pagingEnabled
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.item}>
                        <Image source={item} style={{}} resizeMode='contain' />
                    </View>
                )}
                onMomentumScrollEnd={e => {
                    setSelectedIndex(Math.floor(e.nativeEvent.contentOffset.x / 200));
                }}
                showsHorizontalScrollIndicator={false}
              scrollToIndex={selectedIndex}
            />

        </View>
    );
};

export default ImageCarousel;

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        backgroundColor: '#fefefe',
        marginRight: 6,
        borderRadius: 6,
        // marginBottom:110,
        // elevation:5,
    }
})
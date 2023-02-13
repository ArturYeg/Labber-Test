import { Animated, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Logo from '../../assets/images/logo.svg'

const { width, height } = Dimensions.get('window');

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
}

export default function ShowIntro() {

  return (
    <FadeInView style={styles.imageContainer}>
      <Logo />
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
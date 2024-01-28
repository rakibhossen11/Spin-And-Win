import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated,{ useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';

const SpinAndWin = () => {
    const insets = useSafeAreaInsets();
    const labelOpacity = useSharedValue();
    const [walletBalance,setWalletBalance] = useState();
    return (
        <LinearGradient
        style={[styles.container]}
        colors={["#5C367D", "#00153B"]}
        >
            <Header />
            <Text>Multiply Yours Earnings</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
   }, 
});

export default SpinAndWin;
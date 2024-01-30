import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated,{ useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Wheel from '../components/Wheel';
import WalletView from '../components/WalletView';

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
            <Text style={styles.multiplyEarningText}>Multiply Yours Earnings</Text>
            <WalletView />
            <Wheel />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
   }, 
   multiplyEarningText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    marginBottom: 10,
   },
});

export default SpinAndWin;
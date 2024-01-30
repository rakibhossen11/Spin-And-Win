import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SCREEN_WIDTH } from "../constants/screen";

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const WalletView = () => {
  return (
    <View style={styles.container}>
      <AnimatedGradient
        colors={["#FFEAA2", "#ECB65B"]}
        style={[styles.labelWallet]}
      >
        <FontAwesome name="dollar" size={18} />
        <Text style={styles.walletLabelText}>30</Text>
      </AnimatedGradient>
      <AnimatedGradient
        colors={["#303053", "#4C4A5F"]}
        style={[styles.walletContent]}
      >
        <FontAwesome5 name="coins" size={50} color="white" />
        <View style={styles.walletTextContainer}>
          <Text style={styles.addToWalletText}>Added To Wallet</Text>
          <View style={styles.walletAmountContainer}>
            <FontAwesome name="dollar" size={24} color={"white"} />
            <Text style={styles.walletAmountText}>45</Text>
          </View>
        </View>
      </AnimatedGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 30,
  },
  labelWallet: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 4,
    alignItems: "center",
    position: "absolute",
    top: -15,
    zIndex: 2,
    width: 100,
    left: (SCREEN_WIDTH / 2 - 100) / 2,
    borderRadius: 50,
    paddingHorizontal: 12,
    height: 35,
  },
  walletLabelText: {
    fontSize: 18,
    fontWeight: "500",
  },
  walletContent: {
    width: SCREEN_WIDTH / 2,
    height: 110,
    borderColor: "rgba(209, 177, 177,0.4)",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  walletTextContainer: {
    rowGap: 8,
  },
  addToWalletText: {
    color: 'white',
  },
  walletAmountContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  walletAmountText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default WalletView;

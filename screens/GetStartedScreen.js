import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { BrandName, Colors } from "./components/Utilities";
import { useFonts } from "expo-font";

export default function GetStartedScreen({ navigation }) {
  const [loaded] = useFonts({
    robotoMono: require("../assets/fonts/OpenSansCondensed-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.logoWrapper}>
        <Text>Logo here</Text>
      </View>
      <View style={styles.HeaderWrapper}>
        <Text style={[styles.headerText, { fontFamily: useFonts.robotoMono }]}>
          {BrandName.toUpperCase()}
        </Text>
        <Text style={[styles.headerText, { fontFamily: useFonts.robotoMono }]}>
          CONTACTS
        </Text>
      </View>
      <View style={styles.getStartedWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignInOrRegister")}
          style={styles.getStartedBtn}
        >
          <Text
            style={{
              fontFamily: useFonts.robotoMono,
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: Colors.greyColor,
    flex: 1,
  },
  logoWrapper: {
    flex: 1,
    // backgroundColor: "orange",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  HeaderWrapper: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    marginTop: 10,
    letterSpacing: 3,
  },
  getStartedWrapper: {
    flex: 1,
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedBtn: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.main,
    paddingVertical: 5,
  },
});

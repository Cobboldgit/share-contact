import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { BrandName, Colors } from "./components/Utilities";

export default function SignInOrRegisterScreen({navigation}) {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/getstartedimage.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          KEEP IN TOUCH WITH THE PEOPLE OF {BrandName.toUpperCase()}
        </Text>
        <Text style={styles.text2}>
          Sign in or register with your {BrandName} email
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.btn}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
            <Text style={styles.btnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,

    // backgroundColor: "#c4c4c4",
  },
  imageWrapper: {
    // backgroundColor: "orange",
    flex: 6,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textWrapper: {
    // backgroundColor: "yellow",
    flex: 3,
    // alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "500",
    marginBottom: 20,
  },
  text2: {
    fontSize: 15,
    letterSpacing: 1,
    color: "grey",
  },
  buttonsWrapper: {
    // backgroundColor: "orange",
    flex: 1,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 2,
    paddingVertical: 5
  },
  btnText: {
    letterSpacing: 2,
    fontSize: 18,
  },
});

import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "./components/Utilities";

export default function SigninScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign In</Text>
        <View></View>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/getstartedimage.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.formsWrapper}>
        {/* input starts here */}
        <View style={styles.formsInputWrapper}>
          <View style={styles.input}>
            <View style={styles.inputLabelWrapper}>
              <Text style={styles.inputLabel}>Email</Text>
            </View>
            <TextInput
              placeholder="augustinecobbold@email.com"
              style={styles.formsInput}
            />
          </View>
          <View style={styles.inputLine} />
        </View>
        <View style={styles.formsInputWrapper}>
          <View style={styles.input}>
            <View style={styles.inputLabelWrapper}>
              <Text style={styles.inputLabel}>Password</Text>
            </View>
            <TextInput placeholder="......" style={[styles.formsInput]} />
          </View>
          <View style={styles.inputLine} />
        </View>
        {/* input ends here */}

        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={styles.signinBtn}>
          <Text style={styles.signinBtnText}>SIGN IN</Text>
        </TouchableOpacity>

        <View style={styles.forgotPasswordWrapper}>
          <Text>Forgot? </Text>
          <TouchableOpacity style={styles.resetPasswordbutton}>
            <Text>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    backgroundColor: Colors.main,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 2,
    color: "#fff",
  },
  imageWrapper: {
    flex: 4,
    // backgroundColor: "pink",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  formsWrapper: {
    flex: 6,
    // backgroundColor: "orange",
    paddingHorizontal: 16,
  },
  formsInputWrapper: {
    marginTop: 30,
  },
  formsInput: {
    fontSize: 20,
  },
  inputLabelWrapper: {
    paddingVertical: 20,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLine: {
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  signinBtn: {
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    marginTop: 30
  },
  signinBtnText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
  },
  forgotPasswordWrapper: {
    flexDirection: "row",
    marginTop: 30
    // alignItems: "center",
  },
  resetPasswordbutton: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

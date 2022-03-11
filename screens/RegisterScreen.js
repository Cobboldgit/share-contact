import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "./components/Utilities";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Register</Text>
            <View></View>
          </View>
          <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
            {image ? (
              <Image
                source={{uri: image}}
                style={styles.image}
              />
            ) : (
              <View style={styles.addProfileImageIcon}>
                <MaterialIcons
                  name="person-outline"
                  size={60}
                  color={Colors.main}
                />
                <Text style={{ color: Colors.main }}>ADD PROFILE PHOTO</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.formsWrapper}>
            {/* input starts here */}

            <View style={styles.formsInputWrapper}>
              <View style={styles.input}>
                <View style={styles.inputLabelWrapper}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                </View>
                <TextInput
                  placeholder="Cobbold Augustine"
                  style={[styles.formsInput]}
                />
              </View>
              <View style={styles.inputLine} />
            </View>
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
                  <Text style={styles.inputLabel}>Phone Number</Text>
                </View>
                <TextInput
                  placeholder="+233 (542) 958 451"
                  style={styles.formsInput}
                />
              </View>
              <View style={styles.inputLine} />
            </View>
            <View style={styles.formsInputWrapper}>
              <View style={styles.input}>
                <View style={styles.inputLabelWrapper}>
                  <Text style={styles.inputLabel}>Role</Text>
                </View>
                <TextInput
                  placeholder="Software Developer"
                  style={[styles.formsInput]}
                />
              </View>
              <View style={styles.inputLine} />
            </View>
            <View style={styles.formsInputWrapper}>
              <View style={styles.input}>
                <View style={styles.inputLabelWrapper}>
                  <Text style={styles.inputLabel}>Twitter</Text>
                </View>
                <TextInput placeholder="@cobbold22" style={styles.formsInput} />
              </View>
              <View style={styles.inputLine} />
            </View>
            <View style={styles.formsInputWrapper}>
              <View style={styles.input}>
                <View style={styles.inputLabelWrapper}>
                  <Text style={styles.inputLabel}>LinkedIn</Text>
                </View>
                <TextInput placeholder="/cobbold" style={[styles.formsInput]} />
              </View>
              <View style={styles.inputLine} />
            </View>
            {/* input ends here */}

            <TouchableOpacity activeOpacity={0.5} style={styles.signinBtn}>
              <Text style={styles.signinBtnText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    height: 80,
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
    height: 150,
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e5e4",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  addProfileImageIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  formsWrapper: {
    flex: 7.5,
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
    marginTop: 30,
    marginBottom: 30,
  },
  signinBtnText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
  },
  forgotPasswordWrapper: {
    flexDirection: "row",
    marginTop: 30,
    // alignItems: "center",
  },
  resetPasswordbutton: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

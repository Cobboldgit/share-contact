import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "./components/Utilities";
import { Camera } from "expo-camera";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  const [scanned, setScanned] = useState(false);
  const [startCamera, setStartCamera] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setStartCamera(true);
      } else {
        Alert.alert("No access");
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // Alert.alert(
    //   `Bar code with type ${type} and data ${data} has been scanned!`
    // );
    navigation.navigate("ProfileDetails", { data: data });
  };

  const renderScanner = () => {
    return (
      <View style={{ flex: 9 }}>
        {startCamera ? (
          <Camera
            ref={(ref) => {
              camera = ref;
            }}
            flashMode={flashMode}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            autoFocus={Camera.Constants.AutoFocus.on}
            style={{
              width: Dimensions.get("window").width,
              flex: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 30,
                  flexDirection: "row",
                  paddingTop: StatusBar.currentHeight,
                }}
              >
                <TouchableOpacity onPress={() => console.log("flash light")}>
                  <Ionicons name="flash-sharp" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <EvilIcons name="close" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/focus.png")}
                  style={{
                    tintColor: "#fff",
                    height: 250,
                    width: 250,
                  }}
                />
                <Text style={{ color: "#fff", marginTop: 30, fontSize: 18 }}>
                  Place QR Code Within Frame
                </Text>
              </View>
            </View>
          </Camera>
        ) : (
          <Text>Camera has no permission</Text>
        )}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text>Want to share your contact?</Text>
        <TouchableOpacity
          onPress={() => console.log("send qr")}
          style={{
            borderWidth: 1,
            borderColor: Colors.main,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
            height: 30,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: Colors.main }}>Send QR</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScanner()}
      {renderFooter()}
    </View>
  );
}

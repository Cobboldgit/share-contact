import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "./components/Utilities";
import { Ionicons } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";

export default function HomeScreen({ navigation }) {
  const renderHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: Colors.main,
            justifyContent: "space-between",
            flexDirection: "row",
            paddingTop: StatusBar.currentHeight,
            height: 80,
            alignItems: "flex-end",
            paddingBottom: 16,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Logo Here</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
              <Ionicons name="person-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    const renderUpperText = () => {
      return (
        <View style={{ flex: 3, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Exchange Contact Information
          </Text>
          <Text
            style={{
              letterSpacing: 1,
              fontSize: 18,
              color: "grey",
              lineHeight: 30,
            }}
          >
            Scan this QR below to share your contacts
          </Text>
        </View>
      );
    };

    const renderQrCode = () => {
      const user = {
        name: "Augugstine",
        age: 1,
      };
      return (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 5 }}
        >
          <QRCode content={JSON.stringify(user)} />
        </View>
      );
    };

    const renderLowerText = () => {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/pro.jpg")}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  letterSpacing: 1,
                  marginBottom: 5,
                }}
              >
                Augustine Cobbold
              </Text>
              <Text style={{ fontSize: 18, color: "grey", letterSpacing: 1 }}>
                Software Developer
              </Text>
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={{ flex: 8, paddingHorizontal: 40 }}>
        {renderUpperText()}
        {renderQrCode()}
        {renderLowerText()}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#c4c4c4",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 20 }}>Want to add a new connection?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Scan")}
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
            <Text style={{ color: Colors.main }}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </View>
  );
}

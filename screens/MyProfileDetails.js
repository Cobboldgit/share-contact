import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import React from "react";
import { Colors } from "./components/Utilities";
import { AntDesign, Entypo, Ionicons, Feather } from "@expo/vector-icons";



export default function MyProfileDetails({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={{ flex: 2 }}>
      <View
        style={{
          height: 80,
          backgroundColor: Colors.main,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: StatusBar.currentHeight,
          alignItems: "flex-end",
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18, color: "#fff", letterSpacing: 2 }}>
            My Profile
          </Text>
        </View>
        <View></View>
      </View>
    </View>

    <View style={{ flex: 8, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/pro.jpg")}
          style={{ height: 60, width: 60, borderRadius: 30 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", letterSpacing: 1 }}>
            Augustine Cobbold
          </Text>
          <Text style={{ fontSize: 18, color: "grey" }}>
            Software Developer
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => console.log("social media")}
          style={{
            borderRadius: 100,
            height: 35,
            width: 35,
            backgroundColor: Colors.main,
            marginRight: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="twitter" size={15} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("social media")}
          style={{
            borderRadius: 100,
            height: 35,
            width: 35,
            backgroundColor: Colors.main,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="linkedin" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Feather name="phone" size={18} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 16 }}>
            +233 (245) 254 111
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="mail" size={18} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 16 }}>
            augustinecobbold@codetrain.com
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="location-outline" size={18} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 16 }}>Ghana, Accra</Text>
        </View>
      </View>
    </View>
  </View>
  )
}
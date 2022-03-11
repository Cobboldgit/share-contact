import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "./screens/GetStartedScreen";
import SignInOrRegisterScreen from "./screens/SignInOrRegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";
import ProfileDetailsScreen from "./screens/ProfileDetailsScreen";
import MyProfileDetails from "./screens/MyProfileDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<StatusBar style="auto"/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen
          name="SignInOrRegister"
          component={SignInOrRegisterScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

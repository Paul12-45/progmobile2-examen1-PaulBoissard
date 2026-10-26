import { NativeStackNavigationOptions, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={styleHeader}>
      <Stack.Screen
        name="index"
        options={{ title: "Refuge St-Félicien" }}
      />
      <Stack.Screen
        name="don"
        options={{ title: "Don accepté" }}
      />
    </Stack>
  );
}

export const styleHeader: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#500e64"
  },
  headerTintColor: "#FFFFFF"
}

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
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

import { Text, View, StyleSheet } from "react-native";

export default function Don() {
  return (
    <View style={styles.container}>
      <Text>Don</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

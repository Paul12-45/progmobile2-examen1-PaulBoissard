import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import { Donation } from ".";

export default function Don() {

  const animal = useLocalSearchParams<Donation>()

  return (
    <View style={styles.container}>
      <Text>Nous avons hâte d'accueillir l'animal {animal.nom} de type {animal.type} au refuge. Il s'amusera avec ses nouveaux amis.</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('@/assets/images/merci.png')}
      />
      <Text>EXAMEN DE PAUL BOISSARD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
    marginBottom: 10
  },
});

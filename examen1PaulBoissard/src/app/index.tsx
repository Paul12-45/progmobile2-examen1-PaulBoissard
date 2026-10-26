import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export type Donation = {
  type: string,
  nom: string
}

export default function Index() {

  const [type, setType] = useState<string>('')
  const [nom, setNom] = useState<string>('')
  const routeur = useRouter()

  function navigate() {
    const objDonation: Donation = {
      type: type,
      nom: nom
    }

    routeur.push({ pathname: "/don", params: objDonation })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('@/assets/images/logo-refuge.png')}
      />
      <Text>Donner un animal</Text>
      <TextInput
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TouchableOpacity
        style={styles.bouton}
        onPress={navigate}>
        <Text>Donner</Text>
      </TouchableOpacity>
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
  bouton: {
    backgroundColor: "#500e64",
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from "react-native";

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

  function horaire() {
    alert("Ouvert de 8h-21h du lundi au vendredi")
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={horaire}>
        <Image
          resizeMode="contain"
          source={require('@/assets/images/logo-refuge.png')}
        />
      </Pressable>
      <Text style={styles.texte}>Donner un animal</Text>
      <TextInput
        placeholder="Type"
        value={type}
        onChangeText={setType}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
        style={styles.textinput}
      />
      <TouchableOpacity
        style={styles.bouton}
        onPress={navigate}>
        <Text>Donner</Text>
      </TouchableOpacity>
      <Text style={styles.texte}>EXAMEN DE PAUL BOISSARD</Text>
    </View >
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
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  texte: {
    fontSize: 25,
    fontWeight: "bold"
  },
  textinput: {
    marginTop: 15,
    marginBottom: 15,
    borderColor: "#000000",
    borderWidth: 1,
  }
});

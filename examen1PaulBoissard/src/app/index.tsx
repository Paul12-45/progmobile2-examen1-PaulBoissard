import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function Index() {

  const [type, setType] = useState<string>('')
  const [nom, setNom] = useState<string>('')

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
        style={styles.bouton}>
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

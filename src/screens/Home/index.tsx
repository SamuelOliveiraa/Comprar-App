import ItensContainer from "@/components/ItensContainer";
import { addItem } from "@/storage/ItensStorage";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import style from "./style";

export default function Home() {
  const [title, setTitle] = useState("");

  async function handleAddItem() {
    if (title.trim() === "") {
      Toast.show({
        type: "error", // 'error', 'info'
        text1: "Campo Vazio!",
        text2:
          "O campo esta vazio, não é possivel adicionar itens na lista. Tente Novamente"
      });
      return;
    }

    await addItem({ title, checked: false });
    Toast.show({
      type: "success", // 'error', 'info'
      text1: "Sucesso!",
      text2: "Item adicionado com sucesso 👋"
    });
    setTitle("");
  }

  return (
    <View style={style.container}>
      <View style={style.contain}>
        <Image source={require("@/assets/logo.png")} style={style.image} />

        <TextInput
          style={style.input}
          placeholder="O que você precisa comprar?"
          onChangeText={setTitle}
          value={title}
        />
        <Pressable style={style.button} onPress={handleAddItem}>
          <Text style={style.buttonText}>Adicionar</Text>
        </Pressable>
      </View>

      <ItensContainer />
    </View>
  );
}

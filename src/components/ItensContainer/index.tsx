import { findItensByChecked, removeAllItens } from "@/storage/ItensStorage";
import { ItemType } from "@/types/ItensType";
import { CheckCircleIcon, CircleDashedIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Item from "../Item";
import Line from "../Line";
import style from "./style";

export default function ItensContainer() {
  const [selected, setSelected] = useState<"pendent" | "buyed">("pendent");
  const [itens, setItens] = useState<ItemType[]>([]);

  async function loadItensList() {
    const checkedListType = selected === "buyed" ? true : false;
    const allItens = await findItensByChecked(checkedListType);
    setItens(allItens);
  }
  async function handleDeleteAllItens() {
    await removeAllItens();
  }

  useEffect(() => {
    loadItensList();
  }, [itens || selected]);

  return (
    <View style={style.container}>
      <View style={style.contentHeader}>
        <Pressable
          style={[
            style.iconContainer,
            { opacity: selected === "pendent" ? 1 : 0.3 }
          ]}
          onPress={() => setSelected("pendent")}
        >
          <CircleDashedIcon />
          <Text>Pendentes</Text>
        </Pressable>
        <Pressable
          style={[
            style.iconContainer,
            { opacity: selected === "buyed" ? 1 : 0.3 }
          ]}
          onPress={() => setSelected("buyed")}
        >
          <CheckCircleIcon />
          <Text>Comprados</Text>
        </Pressable>
        <Pressable onPress={handleDeleteAllItens} style={style.cleanButton}>
          <Text>Limpar</Text>
        </Pressable>
      </View>
      <Line />

      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} checked={item.checked} id={item.id} />
        )}
        ListEmptyComponent={
          <Text style={style.emptyComponent}>Nenhum item aqui</Text>
        }
      />
    </View>
  );
}

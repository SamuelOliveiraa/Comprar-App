import { removeItem, toggleChecked } from "@/storage/ItensStorage";
import { ItemType } from "@/types/ItensType";
import { colors } from "@/utils/colors";
import {
  CheckCircleIcon,
  CircleDashedIcon,
  TrashIcon
} from "phosphor-react-native";
import { Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import Line from "../Line";
import style from "./style";

export default function Item({ title, checked, id }: ItemType) {
  async function handleDeleteItem() {
    await removeItem(id);
    Toast.show({
      type: "success", // 'error', 'info'
      text1: "Sucesso!",
      text2: "Item excluido com sucesso!"
    });
  }

  async function handleToggleChecked() {
    await toggleChecked(id);
  }

  return (
    <View style={style.container}>
      <View style={style.content}>
        <Pressable onPress={handleToggleChecked}>
          {checked ? <CheckCircleIcon /> : <CircleDashedIcon />}
        </Pressable>
        <Text style={{ textDecorationLine: checked ? "line-through" : "none" }}>
          {title}
        </Text>
        <Pressable style={style.trash} onPress={handleDeleteItem}>
          <TrashIcon color={colors.backgroundPrimary} />
        </Pressable>
      </View>
      <Line />
    </View>
  );
}

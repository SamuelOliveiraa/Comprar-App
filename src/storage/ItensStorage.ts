import { ItemType, NewItemType } from "@/types/ItensType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getItens(): Promise<ItemType[]> {
  try {
    const allItens = await AsyncStorage.getItem("itens");

    return allItens ? JSON.parse(allItens) : [];
  } catch (error) {
    console.log("Não foi possivel Pegar os itens salvos", error);
    throw error;
  }
}

export async function addItem({ title, checked }: NewItemType) {
  try {
    const allItens = await getItens();

    if (title.trim() === "") {
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      checked
    };

    const updatedItens = [...allItens, newItem];

    await AsyncStorage.setItem("itens", JSON.stringify(updatedItens));
  } catch (error) {
    console.log("Erro ao adicionar item:", error);
    throw error;
  }
}

export async function toggleChecked(id: string) {
  try {
    const allItens = await getItens();

    const updatedItens = allItens.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    await AsyncStorage.setItem("itens", JSON.stringify(updatedItens));
  } catch (error) {
    console.log('Não foi possivel mudar o status "Checked"', error);
    throw error;
  }
}

export async function findItensByChecked(checked: boolean) {
  const allItens = await getItens();

  const filteredItensList = allItens.filter(item => item.checked === checked);

  return filteredItensList;
}

export async function removeItem(id: string) {
  try {
    const allItens = await getItens();

    const newListItens = allItens.filter(item => item.id !== id);

    await AsyncStorage.setItem("itens", JSON.stringify(newListItens));
  } catch (error) {
    console.log("Não foi possivel excluir o item desejado", error);
    throw error;
  }
}


export async function removeAllItens() {
  try {
    await AsyncStorage.setItem("itens", JSON.stringify([]));
  } catch (error) {
    console.log("Não foi possivel excluir todos os itens", error);
    throw error;
  }
}

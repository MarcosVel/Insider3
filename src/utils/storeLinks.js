import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar links salvos.
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || []; // caso retorne algo vazio ou undefined da busca, retorna vazio.

  return linkSaves;
}

// Salvar um link no storage.
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // Se tiver algum link salvo com esse mesmo id ou duplicado, preciso ignorar. ex.: ter dois links do google.com.
  const hasLink = linksStored.some(link => link.id === newLink.id); // some == verifica se algum id é igual ao novo link

  if (hasLink) {
    console.log('esse link ja existe na lista');

    return; // parar execução aqui
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored))

}

// Deletar algum link específico.
export async function deleteLink(links, id) {

}
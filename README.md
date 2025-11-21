## Comprar App

![Capa do Projeto](/src/assets/og-image.png)

ComprarApp é um aplicativo de lista de compras desenvolvido em React Native utilizando Expo. Ele permite adicionar, marcar como comprado e remover itens da lista de compras, proporcionando uma experiência simples e eficiente para organização das suas compras.

## Funcionalidades

- Adicionar itens à lista de compras
- Marcar itens como comprados ou pendentes
- Remover itens individualmente
- Limpar toda a lista de compras
- Visualização separada de itens pendentes e comprados
- Feedback visual com Toasts para ações do usuário

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Phosphor React Native Icons](https://phosphoricons.com/)
- [React Native Toast Message](https://github.com/calintamas/react-native-toast-message)

## Estrutura do Projeto

```
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
├── src
│   ├── assets
│   ├── components
│   │   ├── Item
│   │   ├── ItensContainer
│   │   └── Line
│   ├── screens
│   │   └── Home
│   ├── storage
│   │   └── ItensStorage.ts
│   ├── types
│   │   └── ItensType.ts
│   └── utils
│       └── colors.ts
```

## Como rodar o projeto

1. Instale as dependências:

```sh
npm install
```

2. Inicie o projeto com o Expo:

```sh
npm start
```

3. Siga as instruções do Expo para rodar no emulador ou dispositivo físico.

## Scripts Disponíveis

- `npm start` — Inicia o projeto no Expo
- `npm run android` — Executa no emulador Android
- `npm run ios` — Executa no emulador iOS
- `npm run web` — Executa no navegador

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para sugerir melhorias ou corrigir bugs.

---

Feito com 💙 por Rocketseat e comunidade.

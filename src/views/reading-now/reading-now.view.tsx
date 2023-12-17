import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Book } from "../../components/book";
import * as S from "./reading-now.styles";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ReadingNow({ navigation }: any) {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter e a camara secreata",
    },
    {
      id: 2,
      title: "Flores para algernon",
    },
  ]);
  return (
    <S.StyledReadingNow>
      <Text>Estou lendo</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Book
            title={item.title}
            isReaded={true}
            onPress={() =>
              navigation.navigate("book-details", {
                id: item.id,
                title: item.title,
              })
            }
          />
        )}
      />
    </S.StyledReadingNow>
  );
}

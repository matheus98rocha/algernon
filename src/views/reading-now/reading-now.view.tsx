import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Book } from "../../components/book";
import * as S from './reading-now.styles'

export default function ReadingNow() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter e a camara secreata",
    },
  ]);
  return (
    <S.StyledReadingNow>
      <Text>Estou lendo</Text>
      {/* <FlatList
        data={books}
        renderItem={({ item }) => (
          <Text style={styles.textBook}>{item.title}</Text>
        )}
      /> */}
      <Book title="Flores para Algernon" isReaded={true} />
      <Book title="Assassinato no expresso do oriente" isReaded={false} />
      <Book title="Harry Potter e a camara secreta" isReaded={false} />
    </S.StyledReadingNow>
  );
}
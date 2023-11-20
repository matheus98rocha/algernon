import { Text } from "react-native";
import * as S from "./book.styles";
import { IBook } from "./book.interface";
import { AntDesign } from "@expo/vector-icons";

export const Book = ({ title, isReaded }: IBook) => {
  return (
    <>
      {isReaded ? (
        <S.BookReaded>
          <AntDesign name="book" size={24} color="black" />
          <S.WrapperBookText>
            <S.BookTextReaded>{title}</S.BookTextReaded>
          </S.WrapperBookText>
        </S.BookReaded>
      ) : (
        <S.WrapperBook>
          <AntDesign name="book" size={24} color="black" />
          <S.WrapperBookText>
            <S.BookText>{title}</S.BookText>
          </S.WrapperBookText>
        </S.WrapperBook>
      )}
    </>
  );
};

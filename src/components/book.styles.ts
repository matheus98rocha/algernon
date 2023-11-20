import styled from "styled-components/native";

export const WrapperBook = styled.View`
  width: 300px;
  height: 40px;
  background-color: #ffff;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const BookText = styled.Text`
  color: #010101;
`;

export const BookReaded = styled.View`
  width: 300px;
  height: 40px;
  background-color: #969595;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
`;

export const WrapperBookText = styled.View`
  width: 200px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BookTextReaded = styled.Text`
  color: #ffff;
`;

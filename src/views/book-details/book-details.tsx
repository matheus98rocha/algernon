import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import * as S from "./book-details.styles";
import QuotesModal from "./components/quotes/quotes-modal.component";

function BookDetails({ route, navigation }: any) {
  const { id, title } = route.params;
  const [isOpenQuotesModal, setIsOpenQuotesModal] = useState<boolean>(false);

  return (
    <>
      <QuotesModal
        isOpen={isOpenQuotesModal}
        handleCloseModal={() => setIsOpenQuotesModal(false)}
      />
      <S.StyledBookDetails>
        <Text>{title}</Text>

        <Button
          title="Criar nova citação"
          onPress={() => setIsOpenQuotesModal(true)}
        />
      </S.StyledBookDetails>
    </>
  );
}

export default BookDetails;

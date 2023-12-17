import React from "react";
import { Button, Modal, Text, View } from "react-native";
import { IQuotesModal } from "./quotes-modal.types";

function QuotesModal({ isOpen, handleCloseModal }: IQuotesModal) {
  if (!isOpen) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            height: "70%",
            width: "70%",
          }}
        >
          <Button title="Fechar" onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  );
}

export default QuotesModal;

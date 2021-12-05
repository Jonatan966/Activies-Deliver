import { Button, Text, Flex } from "@chakra-ui/react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: (field: boolean) => void;
  onConfirmSend: (field: boolean) => void;
}

export function Modal({ isOpen, onClose, onConfirmSend }: ModalProps){
  return (
    <ReactModal
      onRequestClose={() => onClose(false)}
      isOpen={isOpen} 
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Flex 
        maxW={300}
        marginX="auto"
        flexDirection="column" 
        textAlign="center"
        alignItems="stretch"
      >
        <Text fontSize={24} fontWeight="600">Deseja Enviar ?</Text>
        <Button 
          backgroundColor="red" 
          marginTop={4}
          onClick={() => {
            onConfirmSend(true),
            onClose(false)
          }}
        > 
          <Text color="#FFF" fontSize={16}>SIM</Text>
        </Button>
        <Button 
          variant="outline" 
          borderColor="#333" 
          marginTop={2}
          onClick={() => onClose(false)}
        >
          <Text color="#333">NÃO</Text>
        </Button>
      </Flex>
    </ReactModal>
  );
}
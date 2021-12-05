import { FormEvent, useState } from "react";
import { Box, Text, Flex, Button, Input, FormControl } from "@chakra-ui/react";

import { Modal } from "../../components/Modal";

export default function Activity(){
  const [ modalConfirmIsOpen, setModalConfirmIsOpen ] = useState(false);
  const [ confirmSend, setConfirmSend ] = useState(false);

  const [ name, setName ] = useState("");
  const [ called, setCalled ] = useState("");
  const [ files, setFiles ] = useState("");

  function handleStudentConfirmation(e: FormEvent){
    e.preventDefault();

    if(!confirmSend) return;

    console.log(name, called, files);
  }

  return (
    <>
    <FormControl onSubmit={handleStudentConfirmation}>
      <Flex 
        maxW={350} 
        marginX="auto" 
        flexDirection="column"
        justifyContent="space-around"
        h="100vh"
      >
        <Flex justifyContent="space-between" gridGap={4} alignItems="stretch">
          <Box 
            marginTop={4}
            w="100%" 
            borderWidth={1} 
            borderRadius={4} 
            padding={4}
          >
            <Text fontSize={14}>Nome</Text>
            <Input variant="flushed" onChange={e => setName(e.target.value)}/>
          </Box>  
          <Box
            marginTop={4}
            borderWidth={1} 
            borderRadius={4} 
            padding={4}
          >
            <Text fontSize={14}>Número</Text>
            <Input variant="flushed" onChange={e => setCalled(e.target.value)}/>
          </Box>
        </Flex>

        <Input type="file"/>

        <Button 
          backgroundColor="#7474FE" 
          padding={8}
          type="submit"
          disabled={!name && !called}
          onClick={() => setModalConfirmIsOpen(true)}
        >
          <Text color="#FFF">ENVIAR</Text>
        </Button>
      </Flex>
    </FormControl>

    <Modal 
        isOpen={modalConfirmIsOpen} 
        onClose={setModalConfirmIsOpen}
        onConfirmSend={setConfirmSend}
      />
    </>
  );
}
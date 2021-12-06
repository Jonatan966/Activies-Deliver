import { FormEvent, useState } from "react";
import { Box, Text, Flex, Button, Input, FormControl } from "@chakra-ui/react";

import { Modal } from "../../components/Modal";
import { route } from "next/dist/server/router";
import { Router, useRouter } from "next/router";

export default function Student(){
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
        <Flex 
          flexDirection="column"
          justifyContent="space-between" 
          gridGap={4} 
          alignItems="stretch"
        >
          <Box 
            marginTop={4}
            w="100%" 
            borderWidth={1} 
            borderRadius={4} 
            padding={4}
          >
            <Text fontSize={14}>Nome</Text>
            <Text>Damaso Magno Lima</Text>
          </Box>  
          <Box
            marginTop={4}
            borderWidth={1} 
            borderRadius={4} 
            padding={4}
          >
            <Text fontSize={14}>Número</Text>
            <Text>9</Text>
          </Box>  
          <Box
            marginTop={4}
            borderWidth={1} 
            borderRadius={4} 
            padding={4}
          >
            <Text fontSize={14}>Imagens</Text>
            <Text>9</Text>
          </Box>
        </Flex>
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
import { useState } from "react";
import Link from "next/link";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons"

import { List } from "../../components/List";
import { useRouter } from "next/router";

export default function HandedOut(){
  const { query } = useRouter();

  const [ activityFinisehd, setActivityFinished ] = useState(false);

  return (
    <Box maxW={350} marginX="auto">
      <header>
        <Flex 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Flex alignItems="center">
            <Link href="/">
              <ArrowBackIcon size={24}/>
            </Link>
            <Text 
              fontSize={24}
              marginLeft={2}
            >Entregues</Text>
          </Flex>
          <Text 
            color="#7474FE" 
            fontSize={24} 
            fontWeight={600}
          >10</Text>
        </Flex>
      </header>

      <nav>
        <Flex justifyContent="space-evenly" marginTop={2}>
          { !activityFinisehd && (
            <Button 
              variant="outline" 
              w="100%" 
              marginRight={2}
            >
              <Text color="#7474FE">Realizar Atividade</Text>
            </Button> 
          ) }
          <Button variant="outline" w="100%">
            <Text color="#7474FE">Finalizar Evento</Text>
          </Button>
        </Flex>
      </nav>

      <main>
        <List 
          title="Damaso" 
          router={`/Student/Damaso`}
        />
      </main>
    </Box>
  );
}
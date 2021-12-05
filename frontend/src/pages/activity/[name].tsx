import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons"
import { List } from "../../components/List";

export default function Activity(){
  return (
    <Box maxW={400} marginX="auto ">
      <header>
        <Flex 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Flex alignItems="center">
            <Link href="/">
              <ArrowBackIcon size={24}/>
            </Link>
            <Text fontSize={24}>Entregues</Text>
          </Flex>
          <Text 
            color="#7474FE" 
            fontSize={24} 
            fontWeight={600}
          >10</Text>
        </Flex>

        <Link href="/">
          Fazer atividade
        </Link>
      </header>

      <main>
        <List 
          router={`/student/Damaso`}
          title="Damaso"
        />
      </main>
    </Box>
  );
}
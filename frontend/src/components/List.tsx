import { Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

interface ListProps {
  title: string;
  router: string;
}

export function List({ title, router }: ListProps){
  return (
    <Link href={`${router}`}>
      <Flex 
        justifyContent="space-between" 
        alignItems="center"
        padding={4}
        color="#FFF"
        background="#7474FE" 
        marginTop={4}
        borderRadius={4}
      >
        <Text fontSize={16} fontWeight="600">{title}</Text>
        <MdArrowRight color="#FFF" size={24}/>
      </Flex>
    </Link>
  );
}
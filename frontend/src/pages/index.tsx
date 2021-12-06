import { useEffect, useState } from "react";
import { Box, Flex, Input, Button, Text, Image } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { api } from "../services/api";

import { List } from "../components/List";

type Tasks = {
  id: string;
  name: string;
}

export default function Home() {
  const [ task, setTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const [ t, setT ] = useState<Tasks[]>([]);

  function handleAddTask(){
    if(!task) return;
    setTasks([...tasks, task]);
  }


  return (
    <Box 
      maxW={400} 
      marginY={2}
      marginX="auto"
    >
      <Flex 
        justifyContent="space-between" 
        alignItems="center"
      >
        <Text>
          <Text fontWeight="bold">Suas listas,</Text> 
          <Text fontSize={24}>Damaso Magno</Text>
        </Text>
        <Image 
          w={12}
          borderRadius={32}
          src="https://avatars.githubusercontent.com/u/72955092?v=4" 
          alt="perfil"
        />
      </Flex>
      <Flex justifyContent="space-between" marginTop={8}>
        <Input 
          placeholder="Nova Tarefa"   
          onChange={e => setTask(e.target.value)}
          value={task}
          variant="outline"
        />
        <Button 
          backgroundColor="#7474FE" 
          onClick={handleAddTask}
          marginLeft={4}
        >
          <MdAdd size={24} color="#FFF"/>
        </Button>
      </Flex>

      { tasks.map( task => (
        <List 
          key={task} 
          router={`/HandedOut/${task}`} 
          title={task} 
        />
      ))}
    </Box>
  )
}

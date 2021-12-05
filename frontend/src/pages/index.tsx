import Link from "next/link";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdAdd, MdArrowRight } from "react-icons/md";
import { List } from "../components/List";

export default function Home() {
  const [ task, setTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);

  function handleAddTask(){
    if(!task) return;

    setTasks([...tasks, task]);
  }
  

  return (
    <Box 
      maxW={400} 
      marginY={8}
      marginX="auto"
    >
      <Flex justifyContent="space-between">
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

      { tasks.map( event => (
        <List 
          key={event}
          router={`/activity/${event}`} 
          title={event}
        />
      )) }
    </Box>
  )
}

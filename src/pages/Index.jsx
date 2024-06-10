import { useState } from "react";
import { Container, Input, Button, VStack, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl" mb={6}>Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
              <Text>{task}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
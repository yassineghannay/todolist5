import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;

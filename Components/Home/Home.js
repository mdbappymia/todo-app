/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const Home = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAddTodos = () => {
    if (!text) {
      alert('invalid');
      return;
    }
    setTodos([...todos, {id: Math.random(), text, status: 'Pending'}]);
    alert('Todo Added');
    setText('');
  };
  const removeTodos = id => {
    const remaining = todos.filter(todo => id !== todo.id);
    alert('Todo Deleted');
    setTodos(remaining);
  };
  const handleComplete = id => {
    let finalTodos = [];
    for (let todo of todos) {
      if (todo.id === id) {
        todo.status = 'Complete';
      }
      finalTodos.push(todo);
    }
    alert('Todo completed');
    setTodos(finalTodos);
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.inputBorder}
          onChangeText={setText}
          value={text}
          placeholder="Enter your todo"
          placeholderTextColor="gray"
        />
        <TouchableHighlight style={styles.enterButton}>
          <Button onPress={handleAddTodos} title="Enter" />
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.todosContainer}>
        {todos.map(todo => (
          <View key={todo.id} style={styles.todoDisplay}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <Text style={{marginStart: 10, fontSize: 16, color: 'white'}}>
              Status:{' '}
              {todo.status === 'Complete' ? (
                <Text style={{color: 'green'}}>Completed</Text>
              ) : (
                <Text style={{color: 'goldenrod'}}>Pending</Text>
              )}
            </Text>
            <TouchableHighlight style={styles.button}>
              <Button
                color="red"
                onPress={() => removeTodos(todo.id)}
                title="Delete"
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
              <Button
                disabled={todo.status === 'Complete'}
                onPress={() => handleComplete(todo.id)}
                title="Complete"
                color="green"
              />
            </TouchableHighlight>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputBorder: {
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    color: 'white',
  },
  todosContainer: {
    height: '70%',
  },
  todoDisplay: {
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    borderColor: 'white',
  },
  todoText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  enterButton: {
    height: 40,
    width: 160,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    height: 40,
    width: 160,
    borderRadius: 10,
    margin: 5,
  },
});

import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

interface TodoItem {
  // uid: string | number;
  id: string | number;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddTodo(todoValue: string) {
    setTodos(prev => [
      ...prev,
      {id: new Date().toISOString(), text: todoValue},
      // {uid: new Date().toISOString(), text: todoValue}, if used uid no need of key extractor
    ]);
    closeModal();
  }

  function handleDeleteTodo(id: string | number) {
    setTodos(current => current.filter(todo => todo.id !== id));
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addBtn}>
        {/* Button is a component with some styling and same type as now Pressable ,before Touchable */}
        <Button
          color="teal"
          title="Add Todo..."
          onPress={() => setIsModalOpen(true)}
        />
      </View>
      {isModalOpen && (
        <TodoInput
          onAddTodo={handleAddTodo}
          isVisible={isModalOpen}
          onCloseModal={closeModal}
        />
      )}
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TodoItem
            title={item.text}
            id={item.id}
            onDeleteItem={handleDeleteTodo}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    borderColor: '#c2bdbd',
    width: '60%',
  },
  addBtn: {
    marginBottom: 18,
  },
});

export default App;

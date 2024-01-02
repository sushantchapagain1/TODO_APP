import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

type TodoInputProps = {
  isVisible: boolean;
  onAddTodo: (value: string) => void;
  onCloseModal: () => void;
};

const TodoInput = ({onAddTodo, isVisible, onCloseModal}: TodoInputProps) => {
  const [todoValue, setTodoValue] = useState('');

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <TextInput
          placeholder="Write todo.."
          style={styles.textInput}
          onChangeText={value => setTodoValue(value)}
          value={todoValue}
          enterKeyHint="done"
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add" onPress={() => onAddTodo(todoValue)} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  logo: {height: 100, width: 100, margin: 20},
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    borderColor: '#c2bdbd',
    width: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 12,
  },
  btn: {
    width: 100,
  },
});

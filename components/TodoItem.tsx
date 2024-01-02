import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ItemProps = {
  title: string;
  id: string | number;
  onDeleteItem: (id: string | number) => void;
};

const TodoItem = ({title, id, onDeleteItem}: ItemProps) => {
  return (
    <View style={styles.todoItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        //In android will apply both style
        android_ripple={{color: '#06483e'}}
        style={({pressed}) =>
          pressed && {backgroundColor: '#06483ec8', borderRadius: 8}
        }>
        <Text style={styles.todoItemText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 12,
    backgroundColor: 'teal',
    borderRadius: 8,
  },
  todoItemText: {color: '#ffffff', padding: 12},
});

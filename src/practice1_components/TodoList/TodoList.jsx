import React, { useState } from 'react';
import Addtodo from '../AddTodo/Addtodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '운동하기', status: 'active' },
    { id: '2', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <Addtodo onAdd={handleAdd} />
    </section>
  );
}

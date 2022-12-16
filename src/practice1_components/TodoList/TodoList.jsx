import React, { useState } from 'react';
import Addtodo from '../AddTodo/Addtodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '운동하기', status: 'active' },
    { id: '2', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Addtodo onAdd={handleAdd} />
    </section>
  );
}

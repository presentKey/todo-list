import './App.css';
import TodoList from './practice1_components/TodoList/TodoList';
import Header from './practice1_components/Header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;

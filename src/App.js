import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AddTaskBar from './components/AddTask';
import './css/Global.module.css'
import styles from './css/Global.module.css'
import { TodosProvider } from './TodosContext';

export const appContext = React.createContext(null);


function App() {
  const [isDarkMode,setIsDarkMode] = useState(false);

  
  return (<div className={isDarkMode ? styles['dark-mode'] : ''} style={{padding:'1vh', boxSizing:'content-box'}}>
    <TodosProvider>
      <Header toDarkMode={()=>setIsDarkMode(!isDarkMode)}/>
      <SearchBar/>
      <TodoList/>
      <AddTaskBar/>
    </TodosProvider>
  </div>);
}

export default App;

// // TodoList.js
// import React, { useState } from 'react';
// import TodoItem from './TodoItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (!newTodo) return;
//     setTodos([...todos, { text: newTodo, completed: false }]);
//     setNewTodo('');
//   };

//   const handleDeleteTodo = (todo) => {
//     const newTodos = todos.filter((t) => t !== todo);
//     setTodos(newTodos);
//   };

//   const handleToggleTodo = (todo) => {
//     const newTodos = [...todos];
//     const index = newTodos.findIndex((t) => t === todo);
//     newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
//     setTodos(newTodos);
//   };

//   return (
//     <div id="container">
//       <h1>To-do List <FontAwesomeIcon icon={faPlus} onClick={handleAddTodo} /></h1>
//       <form onSubmit={handleAddTodo}>
//         <input type="text" placeholder="Add New Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//         <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <TodoItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;


// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDeleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  };

  const handleToggleTodo = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t === todo);
    newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
    setTodos(newTodos);
  };

  return (
    <div id="container">
      <h1>To-do List <FontAwesomeIcon icon={faPlus} onClick={handleAddTodo} /></h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Add New Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
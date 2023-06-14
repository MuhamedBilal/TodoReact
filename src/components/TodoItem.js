
// // TodoItem.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';


// function TodoItem({ todo, handleDeleteTodo, handleToggleTodo }) {
//   return (
//     <li className={todo.completed ? 'completed' : ''} onClick={() => handleToggleTodo(todo)}>
//       <span onClick={() => handleDeleteTodo(todo)}><FontAwesomeIcon icon={faTrash} /></span>
//       {todo.text}
//     </li>
//   );
// }

// export default TodoItem;



// TodoItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, handleDeleteTodo, handleToggleTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''} onClick={() => handleToggleTodo(todo)}>
      <span onClick={(e) => { e.stopPropagation(); handleDeleteTodo(todo); }}><FontAwesomeIcon icon={faTrash} /></span>
      {todo.text}
    </li>
  );
}

export default TodoItem;
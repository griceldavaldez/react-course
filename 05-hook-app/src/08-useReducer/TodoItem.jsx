import React from "react";

export const TodoItem = React.memo(({ todo, onDeleteTodo, onToggleTodo }) => {
  console.log(todo.id, todo.done);

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : '' }`}
          onDoubleClick={ () => onToggleTodo( todo.id ) }
        >
          { todo.description }
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) }
        >Borrar</button>
    </li>
  )
})
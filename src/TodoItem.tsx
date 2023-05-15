import { FunctionComponent } from "react";
import { TodoItemType } from "./App";
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

type Props = {
  todo: TodoItemType;
  onCheckedChanged(id: number, checked: boolean): void;
  onDelete?(id: number): void;
};

const TodoItem: FunctionComponent<Props> = ({
  todo,
  onCheckedChanged,
  onDelete,
}) => {
  return (
    <div className="todo-item-container">
      <div className={todo.checked ? "todo--complete" : ""}>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={(e) => {
            onCheckedChanged(todo.id, !todo.checked);
          }}
        />
        <span className={todo.checked ? "completed" : ""}>{todo.task}</span>
      </div>
      <button
        className="delete-icon"
        onClick={() => {
          onDelete && onDelete(todo.id);
        }}
      >
        <i className="fa fa-trash fa-trash"></i>

      </button>
    </div>
  );
};

export default TodoItem;
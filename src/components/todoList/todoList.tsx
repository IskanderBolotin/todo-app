import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "#store/reducers/todo/selectors";
import { selectFilter } from "#store/reducers/filter/selectors";
import TodoItem from "#components/todoItem";
import { TodoType } from "#types/todo";
import { FilterType } from "#types/filter";
import { State } from "#store/types";
import s from "./todoList.module.scss";

const TodoList: React.FC = () => {
  const todo = useSelector<State, TodoType[]>(selectTodos);
  const filterType = useSelector<State, FilterType>(selectFilter);
  const [filteredTodo, setFilteredTodo] = useState<TodoType[]>(todo);

  useEffect(() => {
    if (filterType === "all") {
      setFilteredTodo(todo);
    }
    if (filterType === "active") {
      const filteredValue = [...todo].filter((item) => !item.completed);
      setFilteredTodo(filteredValue);
    }
    if (filterType === "completed") {
      const filteredValue = [...todo].filter((item) => item.completed);
      setFilteredTodo(filteredValue);
    }
  }, [todo, filterType]);


  return (
    <>
      <ul className={s.list}>
        {filteredTodo.map((item) => {
          const { title, completed, id } = item;
          return (
            <li className={s.item} key={id}>
              <TodoItem
                title={title}
                completed={completed}
                id={id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;

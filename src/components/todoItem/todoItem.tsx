import React from "react";
import { useDispatch } from "react-redux";
import { todoChangeItemAction } from "#store/reducers/todo/actions";
import { ReactComponent as IconOk } from "./icons/icon-ok.svg";
import s from "./todoItem.module.scss";

type Props = {
  title: string;
  completed: boolean;
  id: string;
};

const TodoItem: React.FC<Props> = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  const checkboxHandler = () => {
    dispatch(todoChangeItemAction(id));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.inner}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={completed}
          onChange={checkboxHandler}
        />
        <span className={s.activity}>
          <IconOk />
        </span>
        <span className={s.title}>{title}</span>
      </label>
    </div>
  );
};

export default TodoItem;

import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { todoAddAction } from "#store/reducers/todo/actions";
import { ReactComponent as Arrow } from "./icons/icon-arrow.svg";
import s from "./textField.module.scss";

enum KeyboardKey {
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  Enter = "Enter",
  Esc = "Escape",
}

const TextField: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const btnHandler = () => {
    if (!!inputValue) {
      dispatch(todoAddAction(inputValue));
      setInputValue("");
    }
  };

  const handleKeyDown = (evt: SyntheticEvent) => {
    const nEvt = evt.nativeEvent as KeyboardEvent;

    switch (nEvt.key) {
      case KeyboardKey.Enter:
        evt.preventDefault();
        btnHandler();
        break;
    }
  };

  const inputHandler = (e: SyntheticEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <div className={s.field}>
      <div className={s.icon}>
        <Arrow />
      </div>
      <input
        className={s.input}
        type="text"
        value={inputValue}
        placeholder="What needs to be done?"
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
      />
      {!!inputValue && (
        <button className={s.add} onClick={btnHandler}>
          Add
        </button>
      )}
    </div>
  );
};

export default TextField;

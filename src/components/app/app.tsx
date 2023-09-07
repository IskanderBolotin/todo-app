import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoList from "#components/todoList";
import Filter from "#components/filter";
import TextField from "#components/textField";
import { loadTodos } from "#services/todo";
import { todoLoadedAction } from "#store/reducers/todo/actions";
import s from "./app.module.scss";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const response = await loadTodos();
      dispatch(todoLoadedAction(response));
    };
    loadData();
  }, []);


  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>todos</h1>
      <div className={s.form}>
        <div className={s.top}>
          <TextField />
        </div>
        <div className={s.main}>
          <TodoList />
        </div>
        <div className={s.bottom}>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default App;

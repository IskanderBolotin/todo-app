import React from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "#store/reducers/todo/selectors";
import { selectFilter } from "#store/reducers/filter/selectors";
import { todoClearCompletedAction } from "#store/reducers/todo/actions";
import { filterSetAction } from "#store/reducers/filter/actions";
import { TodoType } from "#types/todo";
import { FilterType } from "#types/filter";
import { State } from "#store/types";
import s from "./filter.module.scss";

type ActivityType = {
  type: FilterType;
  text: string;
}

const activitiesData: ActivityType[] = [
  {
    type: "all",
    text: "All"
  },
  {
    type: "active",
    text: "Active"
  },
  {
    type: "completed",
    text: "Completed"
  },
];

const Filter: React.FC = () => {

  const dispatch = useDispatch();

  const todo = useSelector<State, TodoType[]>(selectTodos);
  const filterType = useSelector<State, FilterType>(selectFilter);

  const btnHandler = () => {
    dispatch(todoClearCompletedAction());
  };

  const radioHandler = (type: FilterType) => {
    dispatch(filterSetAction(type))
  };

  return (
    <div className={s.panel}>
      <div className={s.inner}>
        <div className={s.item}>
          <div className={s.leftCounter}>{[...todo].filter(item => !item.completed).length} items left</div>
        </div>
        <div className={cn(s.item, s.filterItem)}>
          <div className={s.activities}>
            {
              activitiesData.map((item) => {
                const {type, text} = item;
                return (
                  <div className={s.activity} key={type}>
                    <input 
                      className={s.radio} 
                      type="radio" 
                      name="filter" 
                      id={type} 
                      checked={filterType === type}
                      onChange={() => radioHandler(type)}
                    />
                    <label className={s.filterBtn} htmlFor={type}>
                      {text}
                    </label>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={s.item}>
          <button className={s.clear} onClick={btnHandler}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

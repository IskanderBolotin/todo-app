import { TodoType } from "#types/todo";

const todoList: TodoType[] = [
  {
    id: "1",
    title: "Тестовое задание",
    completed: false,
  },
  {
    id: "2",
    title: "Прекрасный код",
    completed: true,
  },
  {
    id: "3",
    title: "Покрытие тестами",
    completed: false,
  },
];

export const loadTodos: () => Promise<TodoType[]> = async () => {
  const response = await new Promise<TodoType[]>((resolve) => {
    setTimeout(() => {
      resolve(todoList)
    }, 1000)
  });
  return response;
};
import { get } from "../api/todos";
import { useEffect } from "react";
import Item from "./item";
import { useTodoStore } from "../states/todos";

export default function List() {
  const todos = useTodoStore((s) => s.todos);
  const setTodos = useTodoStore((s) => s.setTodos);

  useEffect(() => {
    (async () => {
      setTodos(await get());
    })();

    return () => {};
  }, [setTodos]);
  return (
    <div>
      {todos.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </div>
  );
}

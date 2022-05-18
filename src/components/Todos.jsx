import { useQuery } from "react-query";
import axios from "axios";

export function Todos() {
  const { isLoading, error, data } = useQuery("todos", () =>
    axios.get("http://localhost:3001/todo").then(({ data }) => data)
  );
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        data.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.content}</span>
          </li>
        ))
      )}
    </div>
  );
}

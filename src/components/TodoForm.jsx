import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export function TodoForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (value) => axios.post("http://localhost:3001/todo", value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const createTodo = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    console.log(value);
    mutate({
      content: value,
      isComplete: false,
    });
  };

  return (
    <form onSubmit={createTodo}>
      <input type="text" />
      <button>생성</button>
    </form>
  );
}

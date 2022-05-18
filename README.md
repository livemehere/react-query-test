# React Query 사용해보기

```bash
yarn add axios react-query
```

## useQuery() `GET`

```js
const { data, isLoading } = useQuery(queryKey, queryFunction, options)
```


## useMutation() `POST`, `PUT`, `DELETE`

```js
const {mutate,mutateAsync} = useMutation(newTodo => axios.post('/todos', newTodo))

const handleSubmit = async (newTodo) => {
    mutation.mutate(newTodo) // onSuccess 콜백 사용해서 완료를 감지
    await mutateAsync(newTodo) // 동기처리
}
```

## QueryClient.invalidateQueries() 사용해서 새로운 데이터 갱신받기

- `onSuccess` 옵션에다 지정해주기

```js
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
```

## index.js

```js
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

```
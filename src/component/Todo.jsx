import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  function clickHandler(id) {
    // The useDispatch hook should be called once at the top of your component, 
    //not inside the clickHandler function. You need to dispatch the action outside of the function definition
    // useDispatch(deleteTodo(id)) so thats why
    dispatch(deleteTodo(id));
  }
  function clickHandler1(id){
console.log("clicked")
    dispatch(marksAsDone(id))
  }

  //provider component will provide whole store and if we want to extract data or state form the redux store using a useselector component
  return (
    <>
      <h2>Todo List App</h2>
      <u>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration:todo.isDone?"line-through":"none"}}> {todo.task}</span>
           
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={()=>clickHandler1(todo.id)}>markAs Done</button>
          </li>
        ))}
      </u>
    </>
  );
}

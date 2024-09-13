import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

export default function AddForm() {
  const [task, settask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);
    //note->dispatch is our custom hook that have also take two things reducers and action ,action means kiski wajah se state mai change aayega
    dispatch(addTodo(task));
    //addTodo is our reducers and task is our action means action k ander jo payload hai usse mai hi hmmara data hai
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Add task"
          onChange={(e) => settask(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

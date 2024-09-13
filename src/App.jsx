import "./App.css";
import Todo from "./component/Todo";
import { Provider } from "react-redux";
import AddForm from "./component/AddForm";
import { store } from "./app/store";
function App() {
  // provider component makes the redux store available to any nested components that need to access redux store.
  // we have to pass as a props in provider to available data for every nested components.
  return (
    
    <>
    
      <Provider store={store}>
      <AddForm/>
        <Todo />
      </Provider>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

function Todo({ todo, index,addTodo}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      
    >
      
      {todo.text}
    
    </div>
    
  );
}

function TodoForm({ addTodo ,index }) {
  const [value, setValue] = React.useState("");
 
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return  (
    

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Complete the React js logical test",
     
    },
    {
      text: "Make a to-do app",
      
    },
    {
      text: "React js final logical test completed",
     
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    
  };

  

 
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
           
          />
        ))}
          
        <TodoForm addTodo={addTodo} />
      
      </div>
    
    </div>
  );
}

export default App;
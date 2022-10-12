import { useEffect, useState } from "react";


function App() {
 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useState([]);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const onContentChange = (event) => {
    setContent(event.target.value);
  }

  const changeTodoStatus = (event) => {
    const todoIndex = Number(event.target.id);

    if(todos[todoIndex].isDone === false) {
      setTodos(todos.map((todo, index) => {
        if(index === todoIndex) {
          return {...todo, 'isDone': true};
        } else return todo;
      }))
    } else {
      setTodos(todos.filter((todo, index) => index !== todoIndex));
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(title === "") {
      alert("write title!");
      document.getElementById("title").focus();
      return;
    }

    if(content === "") {
      alert("write content!");
      document.getElementById("content").focus();
      return;
    }

    setTodos(todos => [...todos, {'title': title, 'content': content, 'isDone': isDone}]);
    setTitle("");
    setContent("");
    setIsDone(false);
    document.getElementById("title").focus();
  }

  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          id="title"
          style={{
            margin: "10px"
          }}
          onChange={onTitleChange} 
          value={title} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <br />
        <input
          id="content"
          style={{
            marginBottom: "10px",
            marginLeft: "10px"
          }}
          onChange={onContentChange}
          value={content}
          type="text"
          placeholder="Write content..."
        />
        <br />
        <button style={{marginLeft: "10px"}}>Add To Do</button>
      </form>
      <hr />
      <ol>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span style={{fontSize: "18px"}}>{todo.title}: </span>
              <span>{todo.content}</span>
              <button 
                id={index} 
                onClick={changeTodoStatus}
                style={{
                  backgroundColor: todo.isDone ? "red" : "green",
                  marginLeft: "10px"
                }}
              >
                {todo.isDone ? "DELETE" : "COMPLETE"}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
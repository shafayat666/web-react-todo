import { useState } from "react";
import List from "./ToDoItem";


function App() {

  const [itemName, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  const [items, addItem] = useState([]);

  function handleClick() {
    addItem(initItem => {
      return ([...initItem, itemName]);
    });

    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={itemName}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return (
              <List itemValue={item}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { add, all, update, del } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpd, setIsUpd] = useState(false);
  const [Id, setId] = useState("");

  useEffect(() => {
    all(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpd(true);
    setText(text);
    setId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TO-DO APP</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Enter the To Do List...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>

          <div
            className="add"
            onClick={
              isUpd
                ? () => update(Id, text, setToDo, setText, setIsUpd)
                : () => add(text, setText, setToDo)
            }
          >
            {isUpd ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              del={() => del(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

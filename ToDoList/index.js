import React from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = React.useState([])
  const [toDo, setToDo] = React.useState('')
  const [cancelled, setcancelled] = React.useState([])
  const [completed, setcompleted] = React.useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => {
                  if (obj.status === false) {
                    setcancelled([...cancelled, obj])
                  }
                  if (obj.status) {
                    setcompleted([...completed, obj])
                  }

                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      return null
                    }
                    return obj2
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
      </div>
      <div class="div-container">
        <div class="div-style">
          <h1>Progress</h1>
          {toDos.map((obj, index) => {
            if (obj.status) {
              return (
                <h1>{obj.id}</h1>
              )
              return null
            }
          })}
        </div>
        <div class="div-style">
          <h1>Cancelled</h1>
          {cancelled.map((obj, index) => {
            return (
              <h1>{obj.id}</h1>
            )
          })}
        </div>
        <div class="div-style">
          <h1>Completed</h1>
          {completed.map((obj, index) => {
            return (
              <h1>{obj.id}</h1>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

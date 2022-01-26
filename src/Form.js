import React from "react";
import "./App.css";
import { useState } from "react"

export default function Forms() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || firstName === ""){
      alert('All fields are mandatory')
    }
  }

  const handleChangeFirstName = (e) => {
    console.log(e.target.value)
    setFirstName(e.target.value)
    console.log(firstName)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Listen to every change (event <b>onChange</b>) and store each value
            in a State.
          </li>
          <li>
            Listen to the <b>submit</b> event and if one field is empty, show an
            alert.
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/forms.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={handleChangeName}/>
          <br />
          <br />
          <input type="text" placeholder="First Name" onChange={handleChangeFirstName}/>
          <br />
          <button>Valider</button>
        </form>
      </div>
    </div>
  );
}
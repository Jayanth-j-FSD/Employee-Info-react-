import React, { useState } from "react";

function EmpForm(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [number, setNumber] = useState();
  const [role, setRole] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeId = (e) => {
    setId(e.target.value);
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };
  const changeRole = (e) => {
    setRole(e.target.value);
  };

//   const transferValue = (e) => {
//     e.preventDefault();
//     const val = {
//       name,
//       id,
//       number,
//       role,
//     };
//     props.func(val); 
//     clearState();
//   };
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
        name,
        id,
        number,
        role,
      };
    props.func(val);
    clearState();
};


  const clearState = () => {
    setName("");
    setId("");
    setNumber("");
    setRole("");
  };

  return (
    <div>
      <div>
        <label className="hintName">Enter your name : *</label>
        <br />
        <input
          className="inputName"
          type="text"
          value={name}
          onChange={changeName}
        />
      </div>
      <div>
        <label className="hintId">Enter your ID : *</label>
        <br />
        <input
          className="InputId"
          type="text"
          value={id}
          onChange={changeId}
        />
      </div>
      <div>
        <label className="hintNumber">Enter your mobile number : *</label>
        <br />
        <input
          className="inputNumber"
          type="text"
          value={number}
          onChange={changeNumber}
        />
      </div>
      <div>
        <label className="hintRole">Enter your Role : *</label>
        <br />
        <input
          className="inputRole"
          type="text"
          value={role}
          onChange={changeRole}
        />
      </div>
      <div>
        <button onClick={transferValue}>Submit</button>
      </div>
    </div>
  );
}

export default EmpForm;

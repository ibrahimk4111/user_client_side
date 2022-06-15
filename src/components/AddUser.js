import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const person = {
      name: nameValue,
      email: emailValue,
    };
    fetch("https://stark-everglades-41565.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Added Succesfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <h2>Add a user</h2>
      <form onSubmit={submitHandler}>
        <input type="text" ref={nameRef} name="name" placeholder="Name here" />
        <input
          type="text"
          ref={emailRef}
          name="email"
          placeholder="Email here"
        />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default AddUser;

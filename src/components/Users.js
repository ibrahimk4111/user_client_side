import React, { useEffect, useState } from "react";
import "../App.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://stark-everglades-41565.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteHandler = (id) => {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      fetch(`https://stark-everglades-41565.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Succesfully");
            const restData = users.filter((user) => user._id !== id);
            setUsers(restData);
          }
        });
    }
  };
  return (
    <div>
      <h3>Total data: {users.length}</h3>
      <ul>
        {users.map((user) => {
          return (
            <div>
              <li key={user._id}>
                {user.name} :: {user.email}
                <button> update</button>
                <button onClick={() => deleteHandler(user._id)}> Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;

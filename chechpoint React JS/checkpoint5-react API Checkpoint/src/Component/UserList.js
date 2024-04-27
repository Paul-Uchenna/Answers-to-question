import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List </h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {listOfUsers.map((user) => (
          <li
            style={{
              margin: "15px",
              padding: "15px",
              background: "#C97878",
              borderRadius: "5px",
            }}
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

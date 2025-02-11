import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function UserData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //Fech the data from the URL
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <th>{user.first_name}</th>
                <th>{user.last_name}</th>
                <th>{user.email}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

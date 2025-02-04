import { useState } from "react";
import Usertable from "./Usertable";

export default function UserData() {
  const users = [
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      email: "jpenddreth0@census.gov",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Giavani",
      last_name: "Frediani",
      email: "gfrediani1@senate.gov",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Noell",
      last_name: "Bea",
      email: "nbea2@imageshack.us",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Willard",
      last_name: "Valek",
      email: "wvalek3@vk.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Emily",
      last_name: "Johnson",
      email: "emily.johnson@dummyjson.com",
      gender: "female",
    },
    {
      id: 6,
      first_name: "Jhon",
      last_name: "Henrick",
      email: "henrickj@foxod.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Smith",
      last_name: "William",
      email: "williams@reckon.com",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Javek",
      last_name: "Pastro",
      email: "javekp@cared.com",
      gender: "Male",
    },
  ];
  const [data, setData] = useState(users);
  const [color,setColor] = useState('');
  function sortatoz() {
    const prevdata = [...data].sort((a, b) => {
      return a.first_name.localeCompare(b.first_name);
    });
    setData(prevdata);
  }
  function sortztoa() {
    const prevdata = [...data].sort((a, b) => {
      return b.first_name.localeCompare(a.first_name);
    });
    setData(prevdata);
  }

  return (
    <div style={{backgroundColor:color}}>
      <button onClick={sortatoz}>A-Z</button>
      <button onClick={sortztoa}>Z-A</button>
      <hr></hr>
      <Usertable users={data} setColor = {setColor} />
    </div>
  );
}

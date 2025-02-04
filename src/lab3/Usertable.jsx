import { useState } from "react"

export default function Usertable({users,setColor}){
    const [inputcolor,setInputcolor] = useState('')

    const handleColor=()=>{
        setColor(inputcolor)
    }
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Mail ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr></hr>
            <input type="text" value={inputcolor}
            onChange={e=>{setInputcolor(e.target.value)}}/>

            <button onClick={handleColor}>SetColor</button>
        </div>
    )
}
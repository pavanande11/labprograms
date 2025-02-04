import './style.css'
export default function Login(){
    return(
        <div><center>
        <table border={1} style={{alignItems:"center"}} className="login-form">
            <tbody>
                <tr>
                    <td colSpan={2}> Login Page</td>
                </tr>
                <tr>
                    <td>UserName/Email</td>
                    <td><input type="text" name="un" id="un" /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="ps" id="pwd" /></td>
                </tr>
                <tr>
                    <td colSpan={2}> <button>Login</button></td>
                </tr>
            </tbody>
        </table>
        </center>
        </div>
    )
}
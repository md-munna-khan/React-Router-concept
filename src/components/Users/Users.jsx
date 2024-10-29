import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>Our Users : {users.length}</h2>

            <h1>fantastic users</h1>
            <div className="users">
             
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;
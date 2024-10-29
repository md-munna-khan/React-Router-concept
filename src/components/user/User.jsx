import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div style={{
            border:"2px solid green",
            borderRadius:"10px",
            gap:"10px"
        }}>
            <h2>name{name}</h2>
            <h2>email{email}</h2>
            <h2>User Name:{phone}</h2>
        <Link to={`/user/${id}`}>Show Details</Link>
        <Link to={`/user/${id}`}>
        <button>Click me</button></Link>
      
         
        </div>
    );
};

export default User;
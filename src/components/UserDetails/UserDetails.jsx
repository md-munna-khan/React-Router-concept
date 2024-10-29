import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,website}=user;
    return (
        <div>
            <p>user name: {name}</p>
            <p>user website: {website}</p>
        </div>
    );
};

export default UserDetails;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate()
    const {id,title}=post

const handleShowDetail = ()=>{
navigate(`/post/${id}`)
}

    return (
        <div  style={{
            border:"2px solid green",
            borderRadius:"10px",
            gap:"10px"
        }}>
            <h4>post of data: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>post Details</Link>
            <Link to={`/post/${id}`}><button>show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;
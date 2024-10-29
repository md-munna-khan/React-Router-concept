import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId}= useParams()
    const {id,title,body} = post;
    const navigate = useNavigate()

console.log(postId)

    const handleGoBack = ()=>{
navigate(-1);
    }
    return (
        <div>
            <h3>Post Details: {id}</h3>
            <p>tittle : {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
import { useLoaderData } from "react-router-dom";
import Post from "../components/post/post";


const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div className="users">
            <h1>Posts: {posts.length}</h1>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;
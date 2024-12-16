import axios from "axios";

export default function PostList({post, setPostData}){

    function handleClick(){
        axios.delete(`http://localhost:8080/posts/${post.id}`);
        setPostData(postData => {
            const newPostData = postData.filter(p => p.id != post.id);
            return [...newPostData]
        })
    }

    return (
        <div>
            <h2>userId: {post.userId}</h2>
            <h2>title: {post.title}</h2>
            <p>body: {post.body}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}
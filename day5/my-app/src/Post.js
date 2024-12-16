import Comment from "./Comment"

export default function Post({post}){
    console.log(post.comments)
    return (
        <>
        <h1>{post.post}</h1>
        {post?.comments?.map(c => <Comment comment={c.comment}/>)}
        </>       
    )
}
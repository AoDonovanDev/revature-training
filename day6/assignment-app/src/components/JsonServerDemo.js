import axios from "axios";
import { useState, useEffect } from "react"
import PostList from "./PostList";
import AddPostForm from "./AddPostForm";
import UpdatePostForm from "./UpdatePostForm";

export default function JsonServerDemo(){

    const [postData, setPostData] = useState([]);
    const [formData, setFormData] = useState({
        userId: "",
        id: "",
        title: "",
        body: ""
    })

    useEffect(() => {
        const data = axios.get("http://localhost:8080/posts")
            .then(res => {
                setPostData(res.data)
            })
    }, [])

    function handleChange(e){
        const newFormData = {...formData};
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData)
    }

    function handleClick(){
        const data = axios.post("http://localhost:8080/posts", {
            userId: formData.userId,
            id: formData.id,
            title: formData.title,
            body: formData.body
        }).then(res => {
            const newUserData = [...postData];
            newUserData.push(res.data);
            setPostData(newUserData)
            setFormData({
                userId: "",
                id: "",
                title: "",
                body: ""
            })
        })
    }

    return (
       <div>
            {postData?.map((el, i) => <PostList post={el} key={i} setPostData={setPostData}/>)}
            <AddPostForm handleChange={handleChange} handleClick={handleClick} formData={formData}/>
            <UpdatePostForm setPostData={setPostData}/>
       </div>
    )
}
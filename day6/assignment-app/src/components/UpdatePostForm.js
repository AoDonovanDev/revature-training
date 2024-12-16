import axios from "axios";
import { useState } from "react";

export default function UpdatePostForm({setPostData}){


     const [formData, setFormData] = useState({
            userId: "",
            id: "",
            title: "",
            body: ""
        })

    function handleChange(e){
            const newFormData = {...formData};
            newFormData[e.target.name] = e.target.value;
            setFormData(newFormData)
    }
    
    function handleClick(){
        const data = axios.put(`http://localhost:8080/posts/${formData.id}`, {
                ...formData
            })
        setPostData(postData => {
            const copy = [...postData];
            console.log(copy)
            const newPosts = copy.map(el => el.id == formData.id ? formData : el);
            setPostData(newPosts);
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
            <form style={{display: "flex", flexDirection: "column", width: "20%", justifySelf:"center"}}>
                <label htmlFor="userId">userid</label>
                <input type="number" name="userId" id="userId" value={formData.userId} onChange={(e)=>handleChange(e)}/>
                <label htmlFor="userId" >id</label>
                <input type="number" name="id" id="id" value={formData.id} onChange={(e)=>handleChange(e)}/>
                <label htmlFor="userId">title</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={(e)=>handleChange(e)}/>
                <label htmlFor="userId">body</label>
                <input type="textarea" name="body" id="body" value={formData.body} onChange={(e)=>handleChange(e)}/>
                <button type="button" onClick={handleClick}>update</button>
            </form>
        
        </div>
    )
}
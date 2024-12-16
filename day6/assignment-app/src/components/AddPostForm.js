export default function AddPostForm({handleChange, handleClick, formData}){
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
                <button type="button" onClick={handleClick}>create</button>
            </form>
        
        </div>
    )
}
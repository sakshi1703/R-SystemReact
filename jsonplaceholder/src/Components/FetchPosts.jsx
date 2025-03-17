import { useEffect, useState } from "react";




const FetchPosts = ()=>{

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPost(data) ;
        }

        fetchApi();
    }, [])


    return(
        <div>
        <h1 style={{textAlign: "center"}}>Posts</h1>
        <br/>
        <br/>
        <input type="text" placeholder="Search by title" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            {
                post.map((ele, i)=>(
                    <div key={post.id} 
                    style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", borderRadius: "9px", padding: "10px", margin: "15px", paddingBottom: "5px"}}>
                    <h2 key={i} style={{color: "#452c63"}}>{ele.title}</h2>
                    <p style={{color: "##DDA0DD"}}>{ele.body}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    )
}

export default FetchPosts;
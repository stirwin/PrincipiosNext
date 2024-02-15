"use client"

import Link from "next/link";

//REACT CLIENT COMPONET
function Postcard ({post}){
    return (
        <div>
        
        <div >
          <h3>{post.name}</h3>
          <p>{post.status}</p>
            <Link href={`/post/${post.id}`}>ver mas </Link>
        </div>
   
        </div>
    );
}

export default Postcard;

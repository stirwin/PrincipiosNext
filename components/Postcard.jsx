"use client"

//REACT CLIENT COMPONET
function Postcard ({post}){
    return (
        <div>
        
        <div >
          <h3>{post.name}</h3>
          <p>{post.status}</p>
            <button onClick={()=>{alert('funcionando') }}>ver mas </button>
        </div>
   
        </div>
    );
}

export default Postcard;

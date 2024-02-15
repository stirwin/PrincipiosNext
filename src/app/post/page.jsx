import Postcard from "@/components/Postcard";

//fecht
async function Cargapost() {
  //Fetch para obtener los datos
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
//antes que espere 3 segundos y lo redirge a la pagina
//en caso tal sean muchos datos
await new Promise((resolve)=>setTimeout(resolve,3000))  

return data.results;
}

//renderiza REACT SERVER COMPONET
async function PostPage() {
  const posts = await Cargapost();

  return (
    //contenedor de la cards
    <div className="grid grid-cols-3 px-8 gap-4 mt-3">
      {posts.map((post) => (
        <Postcard post={post} key={post.id}/>
      ))}
    </div>
  );
}
export default PostPage;

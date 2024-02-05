import Postcard from "@/components/Postcard";

//fecht
async function Cargapost() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results;
}

//renderiza REACT SERVER COMPONET
async function Post() {
  const posts = await Cargapost();

  return (
    <div>
      {posts.map((post) => (
        <Postcard post={post} key={post.id}/>
      ))}
    </div>
  );
}
export default Post;

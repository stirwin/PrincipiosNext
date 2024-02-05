import PostPage from "../page";
import { Suspense } from "react";
async function CardId(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
}

async function page({ params }) {
  const posts = await CardId(params.id);

  return (
    <div>
      <h1>hola {posts.name}</h1>
      <span>{posts.status}</span>
      <br />
      <span>{posts.species}</span>

      <hr />
      <h1>Otros personajes</h1>
      <div>
        <Suspense fallback={<span>cargandooooo....</span>}>
          <PostPage />
        </Suspense>
      </div>
    </div>
  );
}

export default page;

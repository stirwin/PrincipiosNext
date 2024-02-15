import PostPage from "../page";
import { Suspense } from "react";
import Image from "next/image";

async function CardId(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
}

async function page({ params }) {
  const posts = await CardId(params.id);

  return (
    <div className="p-4">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg  mb-3">
        <a href="#">
          <Image
            class="rounded-t-lg"
            src={posts.image}
            alt=""
            width={400}
            height={100}
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {posts.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {posts.status}
          </p>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-green-400 border border-green-400">
            {posts.species}
          </span>
        </div>
      </div>

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

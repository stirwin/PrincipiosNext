"use client";

import Image from "next/image";
import Link from "next/link";;

//REACT CLIENT COMPONET
function Postcard({ post }) {
  return (
    <div className="">
      <div
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      >
       <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={post.image}
          alt={post.name}
          width={500}
          height={300}
        />
        
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>{post.status}</p>  
            
            <Link href={`/post/${post.id}`}>ver mas </Link>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Postcard;

'use client'
import { useRouter } from "next/navigation";

function About() {
    const route = useRouter()
  return (
    <div>
      <h1>lorem 3</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi
        omnis accusantium esse dolor velit ducimus mollitia facilis earum
        explicabo quam voluptatem totam cupiditate inventore laboriosam
        exercitationem, sunt hic illo?
      </p>

      <button onClick={()=>{route.push('/')}}> enviar</button>
    </div>
  );
}

export default About;

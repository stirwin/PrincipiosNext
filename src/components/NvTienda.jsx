import Link from "next/link"


export default function NavTienda(){
    return <div>
        <h1>LAYAUT TIENDA</h1>
        
        <ul>
    <li> <Link href="/tienda">tienda</Link></li>
    <li> <Link href="/tienda/computadora">computadoras</Link></li>
   
  </ul>
  </div> 
} 
import Link from "next/link"


export default function Navabar() {
  return (<>
    <nav className="flex justify-between w-full p-4 border-b border shadow-sm">
 
      <div className="">
        <h1 className="text-red-500">Logo</h1>
      </div>
      <div>
        <span className="font-bold"> <Link className="mr-2" href="/">home</Link></span>
        <span className="font-bold"> <Link className="mr-2" href="/about">abut</Link></span>
        <span className="font-bold"> <Link className="mr-2" href="/tienda">tienda</Link></span>
        <span className="font-bold"> <Link className="mr-2" href="/post">post</Link></span>
      </div>


    </nav>

  </>)
} 
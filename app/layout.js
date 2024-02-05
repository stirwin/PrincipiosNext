
import Navabar from "../components/Navbar"
import { Poppins} from 'next/font/google'

//Fuente
const poppins =Poppins({
  weight:["300"],
  subsets:['latin']
});


export const metadata = {
  title:'home',
  description:'efqwefq',
  keywords:"wwdqd",
}


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body className={poppins.className}> 
       <Navabar/>
       <h1 className="text-red-400">hpña</h1>
       <h2>hpña</h2>
       <h1>hpña</h1>
       <h1>hpña</h1>
       <h1>hpña</h1>
        {children}</body>
    </html>
  )
}

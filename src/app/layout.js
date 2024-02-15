
import Navabar from "@/components/Navbar"
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
        {children}</body>
    </html>
  )
}

import Link from "next/link"
import Navabar from "../components/Navbar"
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body> 
       <Navabar/>
        {children}</body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import Products from "./products";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Products/>
  )
}

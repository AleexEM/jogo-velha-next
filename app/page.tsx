import { link } from "fs";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <header className="bg-slate-500">
        <h1 className="text-white">Logo</h1>
      </header>
      <button className="bg-red-600 rounded-md text-white mt-5"><Link href={"/jogo-velha"}>Clique</Link> </button>
      
    </main>
  )
  
}

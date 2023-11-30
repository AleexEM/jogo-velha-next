'use client'

import Link from "next/link"
import { useState } from "react"

export default function Page() {

    const [tabela, setTabela] = useState(["","","","","","","","",""])

    const [jogador, setJogador] = useState("X")

  
  function verificaGanhador() {

    let anuncio = "Você Ganhou!"

    //Horizontal
    if ((tabela[0] == tabela[1] && tabela[0] == tabela[2]) && tabela[0] != "" ) { 
      alert(anuncio)
    }
    else if (tabela[3] == tabela[4] && tabela[3] == tabela[5] && tabela[3] != "" ) {
      alert(anuncio)
    }
    else if (tabela[6] == tabela[7] && tabela[6] == tabela[8] && tabela[6] != "" ) {
      alert(anuncio)
    }
    
    //Vertical
    if (tabela[0] == tabela[3] && tabela[0] == tabela[6] && tabela[6] != "" ) { 
      alert(anuncio)
    } 
    else if (tabela[1] == tabela[4] && tabela[1] == tabela[7] && tabela[1] != "" ) {
      alert(anuncio)
    }
    else if (tabela[2] == tabela[5] && tabela[2] == tabela[8] && tabela[2] != "" ) {
      alert(anuncio)
    }

    //Diagonal
    if (tabela[0] == tabela[4] && tabela[0] == tabela[8] && tabela[0] != "" ) { 
      alert(anuncio)
    }
    else if (tabela[2] == tabela[4] && tabela[2] == tabela[6] && tabela[2] != "" ) {
      alert(anuncio)
    }
    
  }

  verificaGanhador();
  
  function marcar(celula:number) {
  
    if (tabela[celula]) return
  
      tabela[celula] = jogador
      if (jogador == "X") {
          setJogador("O")
      } else {
          setJogador("X")
      }

      console.log(tabela)
  }

  return (

    
    <main>
        
        <button className="bg-blue-600 rounded-md text-white mt-5"><Link href={"/"}>Home</Link> </button>

          <div>
            <h1 className='mt-10 mb-4 text-center text-3xl font-bold text-pink-700'>Jogo da Velha</h1>
          </div>

      <div className='bg-slate-600'>       


        <table className=' flex items-center justify-center '>
          <tbody>
            <tr>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(0)}>{tabela[0]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(1)}>{tabela[1]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(2)}>{tabela[2]}</td>
            </tr>
            <tr>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(3)}>{tabela[3]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(4)}>{tabela[4]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(5)}>{tabela[5]}</td>
            </tr>
            <tr>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(6)}>{tabela[6]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(7)}>{tabela[7]}</td>
              <td className='w-20 h-20 text-7xl text-white bg-orange-950 border-8 hover:bg-orange-900 text-center font-black' onClick={()=> marcar(8)}>{tabela[8]}</td>
            </tr>
          </tbody>
        </table>

      </div>


    </main>
  )
}

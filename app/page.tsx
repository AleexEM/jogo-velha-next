'use client'  

import { useState } from 'react'

export default function Home() {

  const [tabela, setTabela] = useState(["","","","","","","","",""])

  const [jogador, setJogador] = useState("X")

  
  
  function marcar(celula:number) {
  
    if (tabela[celula]) return
  
      tabela[celula] = jogador
      if (jogador == "X") {
          setJogador("O")
      } else {
          setJogador("X")
      }
  }

  return (
    <main>



      <div>       
        <table className='flex items-center justify-center my-28'>
          <tbody>
            <tr>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
            </tr>
            <tr>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
            </tr>
            <tr>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
              <td className='w-20 h-20 text-7xl text-red-600 bg-orange-950 border-8 hover:bg-orange-900 text-center' onClick={()=> marcar(0)}></td>
            </tr>
          </tbody>
        </table>

      </div>

    </main>
  )
}

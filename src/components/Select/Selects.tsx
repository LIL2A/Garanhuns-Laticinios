import { Children } from 'react'
import './select.css'

interface SelectsProps{
    nome: string,
    children: any
}

const Selects = ({nome, children}: SelectsProps) => {
  return (
    <div >
      <select className='select-style' name={nome}>
        <option value={nome}>Nome</option>
      </select>
    </div>
  )
}

export default Selects

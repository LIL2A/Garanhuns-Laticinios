import { Children } from 'react'
import './boxEscrito.css'

interface BoxEscritoProps{
    texto: string,
    Children?: any
}

const BoxEscrito = ({texto, Children}: BoxEscritoProps) => {
  return (
    <div className="box-escrito">
        <p>{texto}</p>
        {Children}
    </div>
  )
}

export default BoxEscrito
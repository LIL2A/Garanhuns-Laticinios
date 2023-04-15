
import { Children } from 'react'
import './select.css'

interface SelectsProps{
    
    children: any
}

const Selects = ({children}: SelectsProps) => {
  return (
    <div >
      <select className='select-style' >
        {children}
      </select>
    </div>
  )
}

export default Selects

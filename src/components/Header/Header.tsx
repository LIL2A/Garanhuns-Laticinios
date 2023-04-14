import MenuSide from '../MenuSide/MenuSide'
import "./header.css"


interface HeaderProps{
  texto: string
  
}

const Header = ({texto,  }: HeaderProps) => {
  return (
    <div>
      <div className='header'>
        <MenuSide />
        <p>{texto}</p>
        <input type="text" placeholder="buscar no gl" />
      </div>
    </div>
  )
}

export default Header

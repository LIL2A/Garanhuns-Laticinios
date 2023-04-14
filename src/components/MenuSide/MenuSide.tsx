import {useState} from 'react'
import { FiMenu, FiXCircle } from 'react-icons/fi'
import './menuSide.css'
import { AiOutlineExport } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MenuSide = () => {

  const [click, setClick] = useState(true)

  return (
   <div className='menuSide'>
        {
        (click)
          ? <FiMenu size={30} id="menuButton" onClick={() => setClick(!click)}/>
          : <div className='menu'>
              <FiXCircle size={30} onClick={() => setClick(!click)}/>
              <nav>
                  <Link to="/TelaConta">Conta</Link>
                  <Link to="/TelaRegistros">Registros</Link>
                  <Link to="/TelaEstoque">Estoque</Link>
                  <Link to="/TelaEntregas">Entregas</Link>
                  <Link to="#" id="exit"><AiOutlineExport/> Sair</Link>
              </nav>
            </div>
        }
    </div>

  )
}

export default MenuSide

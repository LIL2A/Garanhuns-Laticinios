import { ImArrowLeft } from 'react-icons/im'
import './headerOptions.css'
import { Link } from 'react-router-dom'

interface HeaderOptionsProps{
    texto: string,
    img?: any
}

const HeaderOptions = ({texto, img}: HeaderOptionsProps) => {
  return (
    <div className='headerOptions'>
          <Link to="/"><ImArrowLeft className='icon'/></Link>
        <div className='optionsInfo'>
                {img}
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default HeaderOptions
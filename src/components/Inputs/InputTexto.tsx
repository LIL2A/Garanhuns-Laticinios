import './inputTexto.css'

interface InputTextoProps{
    tipo: string,
    texto?: string
}

const InputTexto = ({tipo, texto}: InputTextoProps) => {
  return (
    
    <input className='input-style' type={tipo} placeholder={texto} />
    
  )
}

export default InputTexto
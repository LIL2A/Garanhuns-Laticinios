import './addButton.css'

interface BotaoInserirProps{
    nome: string
}

const BotaoInserir = ({nome}: BotaoInserirProps) => {
  return (
    <div>
      <button className='inserir-button'>{nome}</button>
    </div>
  )
}

export default BotaoInserir

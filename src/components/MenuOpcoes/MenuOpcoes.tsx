import "./menuOpcoes.css"

interface MenuOpcoesProps{
  nome: any,
}

const MenuOpcoes = ({nome}: MenuOpcoesProps) => {

  return (
    <div>
      <button className="menuOpcoes">{nome}</button>
    </div>

  )
}

export default MenuOpcoes
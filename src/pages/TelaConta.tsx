
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import Labels from '../components/Labels/Labels'
import InputTexto from '../components/Inputs/InputTexto'
import BotaoInserir from '../components/Buttons/BotaoInserir'

const TelaConta = () => {
  return (
    <div>
      <HeaderOptions texto={'Conta'}  />
        <div className="conta-style">
          <Labels texto={'Nome:'}/>
          <InputTexto tipo={'text'}/>    
          <Labels texto={'E-mail:'}/>
          <InputTexto tipo={'text'} />    
          <Labels texto={'Matrícula:'}/>
          <InputTexto tipo={'text'}  />    
          <Labels texto={'Cargo:'}/>
          <InputTexto tipo={'text'}/>   
          <BotaoInserir nome={'Alterar'}/> 
        </div>
    </div>
  )
}

export default TelaConta

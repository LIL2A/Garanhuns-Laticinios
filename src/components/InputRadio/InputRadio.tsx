import './inputRadio.css'

const InputRadio = () => {
  return (
    <div className='radio-style'>
        <input type="radio" id="opcao1" name="opcao" value="opcao1"/>
        <label htmlFor="opcao1">Manhã</label>
        <input type="radio" id="opcao2" name="opcao" value="opcao2"/>
        <label htmlFor="opcao2">Tarde</label>
    </div>
  )
}

export default InputRadio
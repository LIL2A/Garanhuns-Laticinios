
import BotaoInserir from '../components/Buttons/BotaoInserir'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import LocationInput from '../components/Inputs/InputGeo'
import InputTexto from '../components/Inputs/InputTexto'
import Labels from '../components/Labels/Labels'
import Selects from '../components/Select/Selects'



const TelaEntregas = () => {
  return (
    <div>
      <HeaderOptions texto={'Entregas'}  />
        <div className="conta-style">
          <Labels texto={'Categoria:'} />
          <Selects>
              <option id="options" value="null" selected disabled>Selecione a Categoria</option>
              <option id="options"value="valor 1">Leite</option>
              <option id="options"value="valor 2">Queijos</option>
              <option id="options"value="valor 3">Outros Derivados</option>
              <option id="options"value="valor 4">Manteigas</option>
          </Selects>
          <Labels texto={'Produto:'} />
          <Selects>
              <option id="options" value="null" selected disabled>Selecione o Produto</option>
              <option id="options"value="valor 1">Queijo Minas</option>
              <option id="options"value="valor 2">Doce de leite</option>
              <option id="options"value="valor 3">Manteiga</option>
              <option id="options"value="valor 4">Iogurte</option>
          </Selects>
          

          <Labels texto={'Motorista:'} />
          <Selects>
          <option id="options" value="null" selected disabled>Selecione o Motorista</option>
              <option id="options"value="valor 1">João Pedro</option>
              <option id="options"value="valor 2">Pedro Francisco</option>   
          </Selects>
          
          <Labels texto={'Endereço:'} />
          <LocationInput />

          <Labels texto={'Endereço Final:'} />
          <InputTexto tipo={''} />
          <BotaoInserir nome={'Confirmar'} />
        </div>
    </div>
  )
}

export default TelaEntregas

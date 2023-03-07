import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProducer } from "../redux/actions/producer";
import * as Yup from 'yup';


const Form = () => {
  const dispatch = useDispatch();
  const name = useRef();
  const cpf = useRef();
  const city = useRef();
  const state = useRef();
  const farmTotal = useRef();
  const arableLand = useRef();
  const vegetationArea = useRef();
  const crops = useRef();

  const schema = Yup.object().shape({
    cpf: Yup.string().length(11, 'CPF deve ter exatamente 11 caracteres').required('CPF é obrigatório'),
    name: Yup.string().required('Nome é obrigatório'),
    city: Yup.string().required('Cidade é obrigatória'),
    state: Yup.string().required('Estado é obrigatório'),
    farmTotal: Yup.number().min(0, 'Área total da fazenda deve ser um número maior ou igual a 0').required('Área total da fazenda é obrigatória'),
    arableLand: Yup.number().min(0, 'Área agricultável deve ser um número maior ou igual a 0').required('Área agricultável é obrigatória'),
    vegetationArea: Yup.number().min(0, 'Área de vegetação deve ser um número maior ou igual a 0').required('Área de vegetação é obrigatória'),
    crops: Yup.string().required('Culturas plantadas é obrigatório'),
    sum: Yup.number().test('sum', 'A soma de área agrícultável e vegetação não pode ser maior que a área total da fazenda', function(value) {
      return value <= this.parent.farmTotal;
    })
  });

  const handleSave = () => {
    schema.validate({
      cpf: cpf.current.value,
      name: name.current.value,
      city: city.current.value,
      state: state.current.value,
      farmTotal: farmTotal.current.value,
      arableLand: arableLand.current.value,
      vegetationArea: vegetationArea.current.value,
      crops: crops.current.value,
      sum: Number(arableLand.current.value) + Number(vegetationArea.current.value)
    }).then(() => {
      dispatch(addProducer({
        cpf:cpf.current.value,
        name:name.current.value,
        city:city.current.value,
        state:state.current.value, 
        farmTotal:farmTotal.current.value,
        arableLand:arableLand.current.value, 
        vegetationArea:vegetationArea.current.value,
        crops:crops.current.value 
      }));
    }).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <form>
      Produtor:

      <div>
        Nome: <input ref={name} type="text" />
      </div>
      <div>
        CPF: <input ref={cpf} size="11" type="number" />
      </div>
      <div>
        Cidade: <input ref={city} type="text" />
      </div>
      <div>
        Estado: <input ref={state} type="text" />
      </div>
      <div>
        Área total em hectares da fazenda: <input ref={farmTotal} type="number" />
      </div>
      <div>
        Área agricultável em hectares: <input ref={arableLand} type="number" />
      </div>
      <div>
        Área de vegetação em hectares: <input ref={vegetationArea} type="number" />
      </div>
      <div>
        Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar): <input ref={crops} type="text" />
      </div>
      <button onClick={handleSave}>
        Salvar
      </button>
    </form>

    )

} 

export default Form

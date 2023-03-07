import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { removeProducer,updateProducer } from "../redux/actions/producer"

 

const List = ({item}) => {
    const dispatch = useDispatch()
    const cpf = useRef()
    const name = useRef()
    const city = useRef()
    const state = useRef()
    const farmTotal = useRef()
    const arableLand = useRef()
    const vegetationArea = useRef()
    const crops = useRef()
    const handleRemove =(cpf) => {
        dispatch(removeProducer(
            cpf
        )) 
    } 
    const handleUpdate =(id) => {
        dispatch(updateProducer(
            id,
            {
                cpf:cpf.current.value,
                name:name.current.value,
                city:city.current.value,
                state:state.current.value, 
                farmTotal:farmTotal.current.value,
                arableLand:arableLand.current.value, 
                vegetationArea:vegetationArea.current.value,
                crops:crops.current.value
            }
            
        )) 
    } 
    return <div>
          Nome  <input ref={name} defaultValue = { item.name }/> <br/>
          CPF <input ref={cpf} defaultValue = { item.cpf }/><br/>
          Cidade <input ref={city} defaultValue = { item.city }/>  <br/>
          Estado <input ref={state} defaultValue = { item.state }/>   <br/>
          Fazenda<input ref={farmTotal} defaultValue = { item.farmTotal }/><br/>
          Area<input ref={arableLand} defaultValue = { item.arableLand }/>  <br/>
          Vegetacao<input ref={vegetationArea} defaultValue = { item.vegetationArea }/>   <br/> 
          cultura<input ref={crops} defaultValue = { item.crops }/>  <br/>
            <div onClick={()=>handleRemove(item.cpf)}>X</div>
            <button onClick={()=>handleUpdate(item.cpf)}>Atualizar</button>
    </div>
} 

export default List

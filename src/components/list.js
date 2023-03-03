import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { removeProducer,updateProducer } from "../redux/actions/producer"

 

const List = ({item}) => {
    const dispatch = useDispatch()
    const cpf = useRef()
    const name = useRef()
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
                name:name.current.value
            }
            
        )) 
    } 
    return <div>
            <input ref={cpf} defaultValue = { item.cpf }/>
            <input ref={name} defaultValue = { item.name }/>
            <div onClick={()=>handleRemove(item.cpf)}>X</div>
            <button onClick={()=>handleUpdate(item.cpf)}>Atualizar</button>
    </div>
} 

export default List

import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { addProducer } from "../redux/actions/producer"
 
const Form = () => {
    const dispatch = useDispatch()
    const cpf = useRef()
    const name = useRef()
    const handleSave =() => {
        dispatch(addProducer({
            cpf:cpf.current.value,
            name:name.current.value
        })) 
    } 
    
    return (
        <div>
            Produtor
            <input ref={cpf} type="text" />
            <input ref={name} type="text" />
            <button onClick={handleSave}>
                Salvar
            </button>
        </div>
    )

} 

export default Form

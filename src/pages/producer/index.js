import React from "react"
import Form from "../../components/form" 
import { useSelector} from "react-redux"
import List from "../../components/list"

 

const Producer = () => {
    const { producer } = useSelector(state => state)
    return <div>
        <Form />
        produtores cadastrados:
        { producer?.map((item, index) => (<div key={`producer-${index}`}>
            <List item={item}/>
            </div>))}
        </div>
} 

export default Producer

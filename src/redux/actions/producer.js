export const addProducer = (producer) => ({ 
    type: 'ADD_PRODUCER',
    producer
})
export const removeProducer = (cpf) => ({ 
    type: 'REMOVE_PRODUCER',
    cpf
})
export const updateProducer = (cpf,producer) => ({ 
    type: 'UPDATE_PRODUCER',
    cpf,producer
})

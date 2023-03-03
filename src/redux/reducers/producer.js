const INITIAL_STATE = [{ cpf:'alfredinho',name:'alfredinho2' }]

const reducers = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCER': 
            return state.concat([action.producer])
        case 'REMOVE_PRODUCER':
            return state.filter(producer => producer.cpf !== action.cpf)
        case 'UPDATE_PRODUCER':
            return state.filter(producer => producer.cpf !== action.cpf).concat([
                action.producer
            ])
        default:
            return state
    }  
}

export default reducers

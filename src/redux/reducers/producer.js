import initialState from "../initialState";

const INITIAL_STATE = initialState.producers;

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCER":
      return state.concat([action.producer]);
    case "REMOVE_PRODUCER":
      return state.filter((producer) => producer.cpf !== action.cpf);
    case "UPDATE_PRODUCER":
      const update = state;
      const index = state.findIndex((el) => el.cpf === action.cpf);
      update[index] = action.producer;
      return [...update];
    default:
      return state;
  }
};

export default reducers;

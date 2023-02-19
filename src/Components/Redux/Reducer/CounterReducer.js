const initialState = {
  count: 0,
};

export const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_INCREAMENT":
      return { ...state, count: state.count + action.payload };
      break
    case "COUNT_DECREAMNET":
      return {
        ...state,
        count:state.count > 0 ? state.count -action.payload : 0,
      };
  }

  return state;
};

export const initialState = {
  amount: 0,
};

const bankingReducer = (state = initialState, data) => {
  switch (data?.type) {
    case "DEPOSIT":
      return {
        ...state,
        amount: state.amount + data?.payload,
      };
    case "WITHDRAW":
      return {
        ...state,
        amount: state.amount - data?.payload,
      };
    case "BANKRUPTCY":
      return {
        ...state,
        amount: 0,
      };
    default:
      return state;
  }
};

export default bankingReducer;

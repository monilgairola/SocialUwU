type Action = {
  type: string;
  data?: any;
};

export const user = (state = { authData: null }, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

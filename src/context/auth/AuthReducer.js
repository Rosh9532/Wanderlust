const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case "LOGIN_USER":
      return {
        ...state,
        message: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        message: action.payload,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;

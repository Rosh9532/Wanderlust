//how state transfers

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return {
        ...state,
        likedCountry: [action.payload, ...state.likedCountry],
      };
    case "REMOVE_COUNTRY":
      return {
        ...state,
        likedCountry: state.likedCountry.filter(
          (country) => country.name !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;

export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case "RESET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "HANDLE_ALERT":
      return {
        ...state,
        alert: action.payload,
      };

    default:
      return state;
  }
};

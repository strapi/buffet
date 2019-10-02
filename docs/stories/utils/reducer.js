const reducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case 'ON_CHANGE':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

export default reducer;

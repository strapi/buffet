function reducer(state, action) {
  const { error, type } = action;

  switch (type) {
    case 'SET_ERROR':
      return { ...state, error };
    case 'SET_CHECK':
      return { ...state, canCheck: true };
    default:
      return state;
  }
}

export default reducer;

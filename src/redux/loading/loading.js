const loading = (payload) => ({ type: 'LOADING', payload });
const loaded = (payload) => ({ type: 'LOADED', payload });

const initialState = false;

const updateIsLoading = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return true;
    case 'LOADED':
      return false;
    default:
      return state;
  }
};

export { loading, loaded, updateIsLoading };

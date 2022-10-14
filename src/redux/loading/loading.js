const loading = () => ({ type: 'LOADING' });
const loaded = () => ({ type: 'LOADED' });

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

export const ACTIONS={
ADD_CLASS:'ADD_CLASS',
REMOVE_CLASS:'REMOVE_CLASS',
EDIT_CLASS:'EDIT_CLASS',
}
 const baseURL = 'http://localhost:3000/groups'
 export const addgroup=(group) => async (dispatch) =>{
 await fetch(baseURL, {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    name:group.name,
    description: group.description,
    rating: group.rating,
    title: group.title,

  }),
});
dispatch({ type: ACTIONS.ADD_CLASS, payload: group });
};

export function groupsReducer(state=[],action){
  switch(action.type){
    case ACTIONS.ADD_CLASS:
      return [...state,action.payload]
      default:
        return state;
  }
}
export default groupsReducer;
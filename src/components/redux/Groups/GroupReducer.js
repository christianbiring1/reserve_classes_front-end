export const ACTIONS={
ADD_CLASS:'ADD_CLASS',
GET_CLASS:'GET_CLASS',
REMOVE_CLASS:'REMOVE_CLASS',
EDIT_CLASS:'EDIT_CLASS',
}

// export const getgroups = () => async (dispatch) =>{
// const groupsFromApi = await fetch(baseURL)
// .then((res) =>console.log(res.json()))
// dispatch({ type: ACTIONS.GET_CLASS, payload:groupsFromApi})
// }
export const getgroups = () => async (dispatch) =>{

fetch(baseURL).then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	console.log(data);
  dispatch({ type: ACTIONS.GET_CLASS, payload:data})
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});}



 const baseURL = 'http://localhost:3001/groups'
 const url = 'http://localhost:3001/groups'

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
      return [...state,action.payload];
    case ACTIONS.GET_CLASS:
      return [...state,action.payload]  
      default:
        return state;
  }
}
export default groupsReducer;
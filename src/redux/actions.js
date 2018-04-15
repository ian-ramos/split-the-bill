// export const addPerson = () => { //fetches all persisted
//   return (dispatch) => {
//     dispatch({ type: 'LOADING' });
//     return fetch('https://nerd-alert-backend.herokuapp.com/api/v1/animes', {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json())
//       .then(payload => dispatch({ type: 'FETCH_ALL_ANIMES', payload }));
//   };
// }

export const addPerson = (personToAdd) => ({
  type: 'ADD_PERSON',
  personToAdd
})

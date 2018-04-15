let id = 1

export default (state={people: [], loading: false}, action) => {
  switch(action.type) {
  case 'LOADING':
    return {...state, loading: true}
  case 'ADD_PERSON':
    action.personToAdd.id = id++
    return {...state, people: [...state.people, action.personToAdd], loading: false}
  default:
    return state;
  }
}

export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: state.friends.concat(action.friend)}
      break
    case 'REMOVE_FRIEND': // checked solution to see how they handled this
      // finds index of friend we want to delete
      const friendIndex = state.friends.findIndex(friend => friend.id === action.id) 
      return (
        {...state, // copies rest of state
          friends: [ // goes into friends
            ...state.friends.slice(0, friendIndex), // adds all friends except friend
            ...state.friends.slice(friendIndex + 1) // we want to remove by slicing it out
          ]
        }
      )
      
      break
    default:
      return state
      break
  }
}

// get all the users with pets
export const getUsersWithPets = (state, getters) => {
  return state.users.filter(user => user.pet !== undefined)
}

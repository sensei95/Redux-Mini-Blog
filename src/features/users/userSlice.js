import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
  id: nanoid(),
  name: 'John Doe'
}, {
  id: nanoid(),
  name: 'Jane Doe'
}, {
  id: nanoid(),
  name: 'Elie Kitadi'
}]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})


// export const {} = userSlice.actions

export const selectUserById = (userId) => (state) => state.users.find(user => user.id == userId)

export const selectAllUsers = (state) => state.users

export default userSlice.reducer
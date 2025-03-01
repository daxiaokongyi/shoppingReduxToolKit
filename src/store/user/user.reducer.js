// import { USER_ACTION_TYPES } from './user.types';
import { createSlice } from '@reduxjs/toolkit';
// import { setCurrentUser } from './user.action';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action){
      state.currentUser = action.payload
    }
  }
})

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

export const {setCurrentUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
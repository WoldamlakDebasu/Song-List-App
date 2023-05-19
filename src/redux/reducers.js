// authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;

// songSlice.js


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  error: null,
  loading: false,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsStart(state) {
      state.loading = true;
    },
    getSongsSuccess(state, action) {
      state.loading = false;
      state.songs = action.payload;
    },
    getSongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongStart(state) {
      state.loading = true;
    },
    addSongSuccess(state, action) {
      state.loading = false;
      state.songs.push(action.payload);
    },
    addSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongStart(state) {
      state.loading = true;
    },
    updateSongSuccess(state, action) {
      state.loading = false;
      state.songs = state.songs.map(song =>
        song.id === action.payload.id ? action.payload : song
      );
    },
    updateSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart(state) {
      state.loading = true;
    },
    deleteSongSuccess(state, action) {
      state.loading = false;
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    deleteSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;



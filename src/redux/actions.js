import { createAction } from "@reduxjs/toolkit";

export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAILURE = "ADD_SONG_FAILURE";
export const UPDATE_SONG_SUCCESS = "UPDATE_SONG_SUCCESS";
export const UPDATE_SONG_FAILURE = "UPDATE_SONG_FAILURE";
export const DELETE_SONG_SUCCESS = "DELETE_SONG_SUCCESS";
export const DELETE_SONG_FAILURE = "DELETE_SONG_FAILURE";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";
export const ADD_SONG_REQUEST = "ADD_SONG_REQUEST";
export const UPDATE_SONG_REQUEST = "UPDATE_SONG_REQUEST";
export const DELETE_SONG_REQUEST = "DELETE_SONG_REQUEST";
export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";

// Action to add a song to the list
export const addSong = createAction("songs/addSong");

// Action to update an existing song
export const updateSong = createAction("songs/updateSong");

// Action to delete a song from the list
export const deleteSong = createAction("songs/deleteSong");

//Action to fetch songs to the list
//
export const fetchSongsRequest = () => {
  return {
    type: FETCH_SONGS_REQUEST,
  };
};

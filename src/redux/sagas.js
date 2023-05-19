import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_SONG_REQUEST,
  ADD_SONG_SUCCESS,
  ADD_SONG_FAILURE,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAILURE,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE
} from './actions';


const API_URL = 'https://example-music-api.com/songs';

// Worker sagas
function* addSong(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: ADD_SONG_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_SONG_FAILURE, payload: error.message });
  }
}

function* updateSong(action) {
  try {
    const response = yield call(
      axios.put,
      `${API_URL}/${action.payload.id}`,
      action.payload.updatedSong
    );
    yield put({ type: UPDATE_SONG_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_SONG_FAILURE, payload: error.message });
  }
}

function* deleteSong(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: DELETE_SONG_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SONG_FAILURE, payload: error.message });
  }
}

function* fetchSongs() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_SONGS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_SONGS_FAILURE, payload: error.message });
  }
}


// Watcher sagas
export default function* rootSaga() {
  yield takeLatest(ADD_SONG_REQUEST, addSong);
  yield takeLatest(UPDATE_SONG_REQUEST, updateSong);
  yield takeLatest(DELETE_SONG_REQUEST, deleteSong);
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongs);
}



import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../../redux/actions';

const DeleteSongButton = ({ songId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSong(songId));
  }

  return (
    <button onClick={handleDelete}>Delete Song</button>
  );
}

export default DeleteSongButton;

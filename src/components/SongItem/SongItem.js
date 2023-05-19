import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../../redux/actions';


 const SongItem = ({ song }) => {
 
  const dispatch = useDispatch();

  const handleEdit = () => {
    // Dispatch the updateSong action
    dispatch(updateSong(song.id));
  };

  const handleDelete = () => {
    // Dispatch the deleteSong action
    dispatch(deleteSong(song.id));
  };

  return (
    <div className="song-item">
     <img src={song.artistImage} alt={song.artist} />
      <h3>{song.title}</h3>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Duration: {song.duration}</p>
      <button onClick={handleEdit}
      >Edit </button>
      <button
      onClick={handleDelete}
      >Delete</button>
    </div>
  );
  }

export default SongItem;





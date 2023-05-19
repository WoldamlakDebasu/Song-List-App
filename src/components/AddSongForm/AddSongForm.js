import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/actions';

function AddSongForm() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [duration, setDuration] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ title, artist, album, duration }));
    setTitle('');
    setArtist('');
    setAlbum('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <label>
        Album:
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
      </label>
      <label>
        Duration:
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;






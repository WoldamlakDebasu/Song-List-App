import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../../redux/actions';

const EditSongForm = ({ song }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [duration, setDuration] = useState(song.duration);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSong({ id: song.id, title, artist, album, duration }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="album">Album</label>
        <input
          type="text"
          name="album"
          id="album"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditSongForm;




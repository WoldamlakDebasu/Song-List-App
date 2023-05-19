import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from '../../redux/actions';
import SongItem from '../SongItem/SongItem';


const SongList = () => {

  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>List of Songs</h1>
      {songs.map(song => (
        <SongItem key={song.id} song={song} 
        />
      ))}
    </div>
  );
};

export default SongList;












import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SongList from './components/SongList/SongList';
import AddSongForm from './components/AddSongForm/AddSongForm';
import EditSongForm from './components/EditSongForm/EditSongForm';
import DeleteSongButton from './components/DeleteSongButton/DeleteSongButton';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Sign-up';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" component={<SongList/>} />
        <Route  path="/songs" component={<SongList/>} />
        <Route  path="/create" element={<AddSongForm/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/edit/:id" component={<EditSongForm/>} />
        <Route  path="/delete/:id" component={<DeleteSongButton/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

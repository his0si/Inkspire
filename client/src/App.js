import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/views/auth/Home';
import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import Main from './components/views/Main';
import PostDetail from './components/views/PostDetail';
import WritePost from './components/views/WritePost';
import PostComplete from './components/views/PostComplete';
import Profile from './components/views/Profile';
import NeighborsPage from './components/views/NeighborsPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/post-complete" element={<PostComplete />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/neighbors" element={<NeighborsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
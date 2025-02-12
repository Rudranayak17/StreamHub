import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Browse from '@/pages/browse';
import Live from '@/pages/live';
import Upload from '@/pages/upload';
import Profile from '@/pages/profile';
import VideoPlayer from '@/pages/video-player';
import SignIn from '@/pages/auth/sign-in';
import SignUp from '@/pages/auth/sign-up';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/live" element={<Live />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/video/:id" element={<VideoPlayer />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
import { Chat } from 'pages/Chat';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from 'pages/SignIn';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Routes>
        {user ? (
          <Route path="chat/*" element={<Chat />} />
        ) : (
          <Route path="/" element={<SignIn />} />
        )}
        <Route path="*" element={<SignIn />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

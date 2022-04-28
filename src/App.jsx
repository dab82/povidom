import { Chat } from 'pages/Chat';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from 'pages/SignIn';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';
import { SpinnerDotted } from 'spinners-react';

export const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      {loading ? (
        <SpinnerDotted
          color="#246a80"
          size="100"
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      ) : (
        <Routes>
          {user ? (
            <Route path="/*" element={<Chat />} />
          ) : (
            <Route path="/" element={<SignIn />} />
          )}
          <Route path="*" element={<SignIn />} />
        </Routes>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

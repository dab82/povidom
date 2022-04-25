import { signOut } from 'firebase/auth';
import { FaSignInAlt } from 'react-icons/fa';
import { auth } from 'services/firebase';

export const SignOut = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: 'inherit',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => signOut(auth)}
      >
        <FaSignInAlt size="40" />
      </button>
    </div>
  );
};

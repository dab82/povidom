import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';
import avatar from 'img/deadpool.jpg';
import './MyAvatar.css';

export const MyAvatar = () => {
  // const [{ photoURL }] = useAuthState(auth);
  return (
    <>
      {/* {photoURL ? (
        <img src={photoURL} alt="avatar" className="myAvatar" />
      ) : ( */}
      <img src={avatar} alt="avatar" className="myAvatar" />
      {/* )} */}
    </>
  );
};

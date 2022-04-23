import './ChatName.css';
import tick from '../../images/tick.png';

export const ChatName = ({ user }) => {
  return (
    <div className="chatUserHeader">
      <img src={user.image} alt="user avatar" className="userAvatar" />
      <img src={tick} alt="" className="tickImg" />
      <h3 className="userName">{user.name}</h3>
    </div>
  );
};

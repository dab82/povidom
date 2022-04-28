import './ChatName.css';

export const ChatName = ({ user }) => (
  <div className="chatUserHeader">
    <div className="userAvatar-wrapper">
      <img src={user.image} alt="ava" className="userAvatar" />
    </div>
    <p className="userName">{user.name}</p>
  </div>
);

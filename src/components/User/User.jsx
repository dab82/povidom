import moment from 'moment';
import './User.css';

export const User = ({ id, image, name, messages }) => {
  const lastMessage = messages
    .filter(message => message.chatId === id)
    .reverse()[0];

  return (
    <>
      <li className="usersItem">
        <img src={image} alt="users avatar" className="usersAvatar" />
        <div className="lastMessage">
          <h3 className="usersName">{name}</h3>
          <p className="text">{lastMessage.text}</p>
        </div>
        <p className="data">{moment(lastMessage.date).format('LL')}</p>
      </li>
    </>
  );
};

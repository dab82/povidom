import moment from 'moment';
import './User.css';

export const User = ({ id, image, name, messages }) => {
  // const lastMessage = messages
  //   .filter(message => message.chatId === id)
  //   .reverse()[0];

  return (
    <>
      <li className="usersList">
        <img src={image} alt="users avatar" className="usersAvatar" />
        <div className="lastMessage">
          <h3 className="usersName">{name}</h3>
          {/* <h4 className="text">{lastMessage}</h4> */}
        </div>
        {/* <h5 className="data">{moment(lastMessage).format('DD.MM.YYYY LT')}</h5> */}
      </li>
    </>
  );
};

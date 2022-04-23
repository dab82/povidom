import moment from 'moment';
import './User.css';

export const User = ({ id, image, name, messages }) => {
  const lm = messages.filter(m => m.chatId === id).reverse()[0];

  return (
    <>
      <li className="usersList">
        <img src={image} alt="users avatar" className="usersAvatar" />
        <div className="lm">
          <h3 className="usersName">{name}</h3>
          <h4 className="text">{lm.text}</h4>
        </div>
        <h5 className="data">{moment(lm.date).format('DD MMM YYYY')}</h5>
      </li>
    </>
  );
};

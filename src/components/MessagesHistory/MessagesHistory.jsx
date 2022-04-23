import './MessageHistory.css';
import { MessageContext } from '../../context/lastMessage';
import { useContext } from 'react';

export const MessagesHistory = ({ user }) => {
  const { messages } = useContext(MessageContext);

  const userMessages = messages.filter(m => m.chatId === user.id);

  return (
    <div className="messageBody">
      <ul>
        {userMessages.map(({ id, date, text }) => (
          <li key={id} className="userMessage">
            {id % 2 === 0 && (
              <img
                src={user.image}
                alt="user avatar"
                className="avatarMessage"
              />
            )}
            <div style={{ marginLeft: id % 2 === 0 ? '0' : 'auto' }}>
              <div className="inputMessage"> {text}</div>
              <h6 className="dateMessage"> {date}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

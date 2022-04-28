import { MessageContext } from 'common/MessageContext';
import { useContext, useEffect, useRef } from 'react';

import './MessagesHistory.css';

export const MessagesHistory = ({ user }) => {
  const { messages } = useContext(MessageContext);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const userMessages = messages.filter(message => message.chatId === user.id);

  return (
    <div className="messageBody">
      <ul className="messageList">
        {userMessages.map(({ id, date, text }) => (
          <li key={id} className="userMessage">
            {id % 2 === 0 && (
              <img src={user.image} alt="avatar" className="avatarMessage" />
            )}
            <div
              style={{
                marginLeft: id % 2 === 0 ? '0' : 'auto',
              }}
            >
              <div
                style={{
                  backgroundColor: id % 2 === 0 ? '#2f4f4f' : '#dde0e0',
                  color: id % 2 === 0 ? 'white' : 'black',
                }}
                className="inputMessage"
              >
                {' '}
                {text}
              </div>
              <h6 className="dateMessage"> {date}</h6>
            </div>
          </li>
        ))}
      </ul>
      <div ref={messagesEndRef} />
    </div>
  );
};

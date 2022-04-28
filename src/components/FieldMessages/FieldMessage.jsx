import { ChatName } from 'components/ChatName/ChatName';
import { SendMessagesField } from 'components/SendMessagesField/SendMessagesField';
import { MessagesHistory } from 'components/MessagesHistory/MessagesHistory';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  fetchContactById,
  fetchAddMessage,
  fetchChuckNorris,
} from 'services/chatAPI';
import moment from 'moment';
import { RiArrowGoBackFill } from 'react-icons/ri';
import './FieldMessage.css';

export const FieldMessages = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [display, setDisplay] = useState({
    matches: window.innerWidth > 540 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 540px)');
    mediaQuery.addListener(setDisplay);
    return () => mediaQuery.removeListener(setDisplay);
  }, []);

  useEffect(() => {
    fetchContactById(id).then(res => setUser(res.data));
  }, [id]);

  const sendMessage = text => {
    const message = {
      chatId: Number(id),
      text,
      date: moment().format('DD.MM.YY LT'),
    };
    fetchAddMessage(message);

    fetchChuckNorris().then(res => {
      setTimeout(() => {
        const messageAnswer = {
          chatId: Number(id),
          text: res.data.value,
          date: moment().format('DD.MM.YY LT'),
        };
        fetchAddMessage(messageAnswer);
      }, 5000);
    });
  };

  return (
    <div className="fieldMessages">
      {display && !display.matches && (
        <Link to="/" className="back_link">
          <RiArrowGoBackFill size="40" />
        </Link>
      )}
      <ChatName user={user} />
      <MessagesHistory user={user} />
      <SendMessagesField onSubmit={sendMessage} />
    </div>
  );
};

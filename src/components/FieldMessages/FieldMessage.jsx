import { ChatName } from 'components/ChatName/ChatName';
import { SendMessagesField } from 'components/SendMessagesField/SendMessagesField';
import { MessagesHistory } from 'components/MessagesHistory/MessagesHistory';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchContactById,
  fetchAddMessage,
  fetchChuckNorris,
} from 'services/chatAPI';
import moment from 'moment';
import './FieldMessage.css';

export const FieldMessages = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchContactById(id).then(res => setUser(res.data));
  }, [id]);

  const sentMessage = text => {
    const message = {
      chatId: Number(id),
      text,
      date: moment().format('DD.MM.YYYY LT'),
    };
    fetchAddMessage(message);

    fetchChuckNorris().then(res => {
      setTimeout(() => {
        const messageAnswer = {
          chatId: Number(id),
          text: res.data.value,
          date: moment().format('MM/DD/YY LT'),
        };
        fetchAddMessage(messageAnswer);
      }, 5000);
    });
  };

  return (
    <div className="fieldMessages">
      <ChatName user={user} />
      <MessagesHistory user={user} />
      <SendMessagesField onSubmit={sentMessage} />
    </div>
  );
};

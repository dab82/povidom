import { SideBar } from 'components/SideBar/SideBar';
import { FieldMessages } from 'components/FieldMessages/FieldMessage';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { fetchContacts, fetchMessages } from 'services/chatAPI';
import { MessageContext } from 'common/MessageContext';

export const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) ?? []
  );

  useEffect(() => {
    fetchContacts().then(res => setUsers(res.data));
  }, []);

  useEffect(() => {
    fetchMessages().then(res => {
      localStorage.setItem('messages', JSON.stringify(res.data));
      setMessages(res.data);
    });
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <MessageContext.Provider value={{ messages }}>
        <SideBar users={users} />
        <Routes>
          <Route path="chat/:id" element={<FieldMessages />} />
        </Routes>
      </MessageContext.Provider>
    </div>
  );
};

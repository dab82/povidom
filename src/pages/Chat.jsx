import { SideBar } from 'components/SideBar/SideBar';
import { FieldMessages } from 'components/FieldMessages/FieldMessage';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { fetchContacts, fetchMessages } from 'services/chatAPI';
import { MessageContext } from 'common/MessageContext';
import './Chat.css';

export const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) ?? []
  );
  const [display, setDisplay] = useState({
    matches: window.innerWidth > 540 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 540px)');
    mediaQuery.addListener(setDisplay);
    return () => mediaQuery.removeListener(setDisplay);
  }, []);

  useEffect(() => {
    fetchContacts().then(res => setUsers(res.data));
  }, []);

  useEffect(() => {
    fetchMessages().then(res => {
      localStorage.setItem('messages', JSON.stringify(res.data));
      setMessages(res.data);
    });
  }, [messages]);

  const show = display && display.matches;

  return (
    <div className="chatPage">
      <MessageContext.Provider value={{ messages }}>
        {show && (
          <>
            <SideBar users={users} />
            <Routes>
              <Route path="chat/:id" element={<FieldMessages />} />
            </Routes>
          </>
        )}
        {!show && (
          <Routes>
            <Route path="/" element={<SideBar users={users} />} />
            <Route path="chat/:id" element={<FieldMessages />} />
          </Routes>
        )}
      </MessageContext.Provider>
    </div>
  );
};

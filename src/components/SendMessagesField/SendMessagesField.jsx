import { useState } from 'react';
import { IoSendOutline } from 'react-icons/io';
import './SendMessagesField.css';

export const SendMessagesField = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'text':
        setText(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };
  return (
    <div className="sendMessages">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputSendMessage"
          type="text"
          name="text"
          placeholder="Type your message"
          value={text}
          autoComplete="off"
          onChange={handleChange}
        />
        <IoSendOutline />
      </form>
    </div>
  );
};

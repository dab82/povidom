import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
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
        <button className="btnSendMessage">
          <AiOutlineSend size={20} />
        </button>
      </form>
    </div>
  );
};

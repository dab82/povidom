import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { User } from 'components/User/User';
import { MessageContext } from 'common/MessageContext';
import './UserList.css';

export const UserList = ({ users }) => {
  const { messages } = useContext(MessageContext);

  return (
    <>
      <h2 className="headName">Chats</h2>
      <ul>
        {users.map(({ id, image, name }) => (
          <Link
            to={`chat/${id}`}
            className="link"
            key={id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <User id={id} image={image} name={name} messages={messages} />
          </Link>
        ))}
      </ul>
    </>
  );
};

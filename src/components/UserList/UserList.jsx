import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { User } from 'components/User/User';
import { MessageContext } from 'common/MessageContext';
import { SpinnerCircular } from 'spinners-react';
import './UserList.css';

export const UserList = ({ users }) => {
  const { messages } = useContext(MessageContext);

  return (
    <>
      <h2 className="headName">Chats</h2>
      <ul className="userList">
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
      <div className="addUserWrapper">
        <SpinnerCircular
          color="#246a80"
          secondaryColor="rgba(0,0,0,0.1)"
          speed="50"
        />
      </div>
    </>
  );
};

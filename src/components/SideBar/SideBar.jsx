import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiChatSmile2Line } from 'react-icons/ri';
import { Filter } from 'components/Filter/Filter';
import { UserList } from 'components/UserList/UserList';
import { SignOut } from 'components/SignOut/SignOut';
import './SideBar.css';
import { MyAvatar } from 'components/Avatar/MyAvatar';

export const SideBar = ({ users }) => {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleUsers = () => {
    const normalizedFilter = filter.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <aside className="sideBar">
      <div className="sidebarHeader">
        <div className="sidebarLogo">
          <MyAvatar />
          <p className="logo">
            P<RiChatSmile2Line />
            VIDOM
          </p>

          <Link to="/">
            <SignOut />
          </Link>
        </div>
        <Filter value={filter} onChange={changeFilter} />
      </div>
      <UserList users={getVisibleUsers()} />
    </aside>
  );
};

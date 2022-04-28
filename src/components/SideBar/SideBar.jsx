import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'components/Filter/Filter';
import { UserList } from 'components/UserList/UserList';
import { SignOut } from 'components/SignOut/SignOut';
import { MyAvatar } from 'components/Avatar/MyAvatar';
import povidom from 'img/Povidom.webp';
import './SideBar.css';

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
          <img src={povidom} alt="logo" className="logo" />
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

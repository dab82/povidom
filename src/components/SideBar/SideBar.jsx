import { RiGhostSmileLine } from 'react-icons/ri';
import { Filter } from 'components/Filter/Filter';
import { UserList } from 'components/UserList/UserList';
import './SideBar.css';

export const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sidebarHeader">
        <RiGhostSmileLine />
        <Filter
        //   value={filter} onChange={changeFilter}
        />
      </div>
      <UserList
      //   users={getVisibleUsers()}
      />
    </aside>
  );
};

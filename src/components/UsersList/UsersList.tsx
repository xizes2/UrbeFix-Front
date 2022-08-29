import { useEffect } from "react";
import { RegisteredUser } from "../../app/store/feature/user/model/User";
import { useAppSelector } from "../../app/store/hooks";
import useApi from "../../hooks/useApi";
import UserCard from "../UserCard/UserCard";
import UsersListStyled from "./UsersListStyled";

const UsersList = (): JSX.Element => {
  const { getUsers } = useApi();
  const { users } = useAppSelector((users) => users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <UsersListStyled className="users-list-container">
        <h2 className="users-list__title">Users List</h2>
        <ul className="users-list__list">
          {users.map((user: RegisteredUser) => (
            <li key={user.id} className="users-list__user">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </UsersListStyled>
    </>
  );
};

export default UsersList;

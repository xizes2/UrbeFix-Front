import { RegisteredUser } from "../../app/store/feature/user/model/User";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: RegisteredUser;
}

const UserCard = ({
  user: { userName, image },
}: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled className="user-card">
      <h3 className="user-card__name">{userName}</h3>
      <img
        className="user-card__image"
        src={image}
        alt={`User ${userName}`}
        height="400px"
      />
    </UserCardStyled>
  );
};

export default UserCard;

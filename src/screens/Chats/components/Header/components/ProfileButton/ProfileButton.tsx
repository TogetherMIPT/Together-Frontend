import { ProfileIcon } from "./ProfileIcon";
import { useNavigate } from "react-router";

export const ProfileButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile');
  };

  return <div onClick={handleClick}>
    <ProfileIcon />
  </div>
}
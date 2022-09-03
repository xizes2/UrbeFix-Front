import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <img
        className="urbefix-logo"
        src="/images/urbefixlogo.png"
        alt="urbefix logo"
      />
    </HeaderStyled>
  );
};

export default Header;

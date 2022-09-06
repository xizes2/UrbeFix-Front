import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <h1 className="main-title">
        <img
          className="urbefix-logo"
          src="/images/urbefixlogo.png"
          alt="urbefix logo"
        />
      </h1>
    </HeaderStyled>
  );
};

export default Header;

import Logo from "../components/logo";

const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-between gap-4 mx-auto sm:flex-row w-max">
      <Logo />
    </header>
  );
};

export default Header;
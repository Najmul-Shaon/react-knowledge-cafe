import profileImg from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 max-w-6xl mx-auto mb-8">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profileImg} alt="" />
    </header>
  );
};

export default Header;

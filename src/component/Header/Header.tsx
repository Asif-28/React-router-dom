import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-[#0f0f0f] text-white text-base py-4">
        <ul className="flex justify-center gap-14 items-center">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
          <Link to="user">
            <li>User</li>
          </Link>
          <Link to="#">
            <li>Help</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

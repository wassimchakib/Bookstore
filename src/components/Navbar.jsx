import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => (
  <div className="container">
    <nav className="navbar">
      <div className="navbar__content">
        <h1 className="navbar__title">Bookstore CMS</h1>
        <ul className="navbar__links">
          <li><a href="/">Books</a></li>
          <li><a href="/">Categories</a></li>
        </ul>
      </div>
      <AccountCircleIcon className="navbar__user" sx={{ fontSize: 40, color: '#0290ff' }} />
    </nav>
  </div>
);

export default Navbar;

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
    <div className="hamburger-menu">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isMenuOpen && (
        <ul className="menu-links">
          <li>
            <Link to="/investment">Investment</Link>
          </li>
          <li>
            <Link to="/trading">Trading</Link>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;

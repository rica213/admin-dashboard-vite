import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Library-Xpress</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search_icon" className="icon" />
        <img src="/app.svg" alt="app_icon" className="icon" />
        <img src="/expand.svg" alt="expand_icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification_icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user_profile"
          />
          <span>Tao</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar

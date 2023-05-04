import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import navBarStyles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={navBarStyles.navbar}>
      <div className={navBarStyles.container}>
        <div className={navBarStyles.left}>
          <img
            src="https://res.cloudinary.com/do4v7miwh/image/upload/v1683219458/MiniProjects/Netflix/Netflix_Logo_PMS_bgqbne.png"
            alt="logo"
            className={navBarStyles.logo}
          />
          <span className="nav-link">HomePage</span>
          <span className="nav-link">Series</span>
          <span className="nav-link">Movies</span>
          <span className="nav-link">New and Popular</span>
          <span className="nav-link">My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationsNoneIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

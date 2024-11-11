import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <header className="w-full h-16  flex items-center justify-between px-4">
      <div className=" font-semibold h-4 flex items-center gap-6 cursor-pointer">
        <MenuIcon />
        Dashboard
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Search here..."
          className=" p-1 px-9 w-full bg-slate-200 rounded-md"
        />
      </div>
      <div className=" flex items-center p-1 gap-9">
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
        <div>
          <h2 className="font-semibold">Mr.Ntya</h2>
          <h4 className=" text-slate-700">software developer</h4>
        </div>
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
      </div>
    </header>
  );
};

export default Navbar;

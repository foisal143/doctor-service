import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handlerLogout = () => {
    logout()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <div className="navbar flex justify-between items-center bg-base-100">
      <div className="">
        <a className=" cursor-pointer font-bold  text-xl  lg:text-3xl">
          Daily Checkup
        </a>
      </div>
      <div className=" hidden lg:flex  gap-10 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/order-review">Booked Service</Link>
        <Link to="/login">Login</Link>
      </div>

      {user && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {user && (
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handlerLogout}>Logout</button>
              </li>
            </ul>
          </div>

          <div className="dropdown md:hidden  dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaBars className="text-2xl"></FaBars>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body text-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/order-review">Booked Service</Link>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

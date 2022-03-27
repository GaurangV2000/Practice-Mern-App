import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   const [state, dispatch] = useContext(UserContext);

  //   const RenderMenu = () => {
  //     if (state) {
  //       return (
  //         <>
  //           <li className="nav-item">
  //             <NavLink className="nav-link active" aria-current="page" to="/">
  //               Home
  //             </NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/About">
  //               About US
  //             </NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/Contact">
  //               Contact US
  //             </NavLink>
  //           </li>

  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/logout">
  //               Log Out
  //             </NavLink>
  //           </li>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <li className="nav-item">
  //             <NavLink className="nav-link active" aria-current="page" to="/">
  //               Home
  //             </NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/About">
  //               About US
  //             </NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/Contact">
  //               Contact US
  //             </NavLink>
  //           </li>

  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/Login">
  //               Sign In
  //             </NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/SignUp">
  //               Register
  //             </NavLink>
  //           </li>
  //         </>
  //       );
  //     }
  //   };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Student Data
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Insert Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studentinfo">
                  Student info
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

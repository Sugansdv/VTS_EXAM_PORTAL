import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import {
  FaPalette,
  FaPencilRuler,
  FaDesktop,
  FaClipboard,
  FaSearch,
} from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {
 const handleNavClick = () => {
    const offcanvasElement = document.querySelector(".offcanvas");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };
  return (
    <>
      {/* Logo */}
      <div className="bg-light text-dark p-3 d-flex align-items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-circle"
        />
        <div>
          <h6 className="mb-0 fw-bold">VTS Exam</h6>
          <small className="mb-0 fw-bold">Portal</small>
        </div>
      </div>

      {/* Menu */}
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <NavLink
            to="/overview"
            end
            className={({ isActive }) =>
              `nav-link hover-custom ${isActive ? "active-custom" : ""}`
            }
          >
            <FaPalette className="me-2" /> Overview
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/designing"
            className={({ isActive }) =>
              `nav-link hover-custom ${isActive ? "active-custom" : ""}`
            }
          >
            <FaPencilRuler className="me-2" /> Designing
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/development"
            className={({ isActive }) =>
              `nav-link hover-custom ${isActive ? "active-custom" : ""}`
            }
          >
            <FaDesktop className="me-2" /> Development
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/exam"
            className={({ isActive }) =>
              `nav-link hover-custom ${isActive ? "active-custom" : ""}`
            }
          >
            <FaClipboard className="me-2" /> Exam
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/result"
            className={({ isActive }) =>
              `nav-link hover-custom ${isActive ? "active-custom" : ""}`
            }
          >
            <FaSearch className="me-2" /> Result
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

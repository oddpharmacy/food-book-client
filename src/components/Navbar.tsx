import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import {
  NavbarWrapper,
  NavbarContent,
  NavLogo,
  NavLinks,
  NavLogin,
  NavLink,
} from "../styles/Navbar.style";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarContent data-test="header-logo">
        <Link to="/">
          <NavLogo src="src/assets/logo.png" alt="logo" />
        </Link>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link to="/login">
            <NavLogin>Login</NavLogin>
          </Link>
          <LanguageIcon fontSize="inherit" />
        </NavLinks>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarContent,
  NavLogo,
  NavLinks,
  NavLogin,
  NavLink,
  NavLanguageIcon,
  NavDropdownWrapper,
  NavDropdown,
  NavButtonWrapper,
  NavLangButton,
} from "../styles/Navbar.style";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { t } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <NavbarWrapper>
      <NavbarContent data-test="header-logo">
        <Link to="/">
          <NavLogo src="src/assets/logo.png" alt="logo" />
        </Link>
        <NavLinks>
          <NavLink data-test="header-home" to="/">
            {t("Home")}
          </NavLink>
          <NavLink to="/about">{t("About")}</NavLink>
          <Link to="/login">
            <NavLogin>{t("Login")}</NavLogin>
          </Link>
          <NavDropdownWrapper>
            <NavLanguageIcon
              data-test="lang-button"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <NavDropdown showDropdown={showDropdown}>
              <NavButtonWrapper>
                <NavLangButton onClick={() => changeLanguage("en")}>
                  en
                </NavLangButton>
                <NavLangButton
                  data-test="lang-bm"
                  onClick={() => changeLanguage("bm")}
                >
                  bm
                </NavLangButton>
              </NavButtonWrapper>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavLinks>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

export const NavbarWrapper = styled.header`
  width: 100%;
  background-color: hsl(44, 58%, 93%);
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10%;

  @media (max-width: 768px) {
    padding: 10px 5%;
  }
`;

export const NavLogo = styled.img`
  height: 10rem;

  @media (max-width: 768px) {
    height: 7rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const NavLogin = styled.button`
  padding: 10px 25px;
  border-radius: 30px;
  border: 1.5px solid black;
  background-color: transparent;
  font-size: 1.8rem;

  &:active {
    transform: translate(2px, 2px);
  }

  &:hover {
    background-color: hsl(44, 58%, 83%);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    font-size: 1.5rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:active {
    transform: translate(1px, 1px);
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLanguageIcon = styled(LanguageIcon)`
  font-size: inherit;

  &:active {
    transform: translate(1px, 1px);
  }

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const NavDropdownWrapper = styled.div`
  position: relative;
`;

interface DropdownProps {
  showDropdown: boolean;
}

export const NavDropdown = styled.div<DropdownProps>`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0%;
  right: 0;
  z-index: 1;
  line-height: 0;

  &:before {
    content: "";
    position: absolute;
    border: solid transparent;
    border-bottom-color: white;
    border-width: 11px;
    top: -10px;
    transform: translateX(-5%);
    z-index: 1;
  }
`;

export const NavButtonWrapper = styled.div`
  background: white;
  position: relative;
  width: 100px;
  top: 12px;
  left: -200%;
  padding: 1.2rem 0;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 40px;
    left: -65%;
  }
`;

export const NavLangButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;

  &:hover {
    background-color: gray;
    color: white;
  }

  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

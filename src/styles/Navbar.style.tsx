import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

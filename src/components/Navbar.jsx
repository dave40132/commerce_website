import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">

      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          product
        </NavbarLink>

        <NavbarLink as={Link} to="/about">
          Catalogues
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;

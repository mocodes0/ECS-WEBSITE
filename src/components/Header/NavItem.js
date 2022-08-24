import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ content, href }) {
  return (
    <li className="text-base font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#6366F1] hover:text-[#FFFFFF]"
            : "text-[#FFFFFF] hover:text-[#6366F1]"
        }
        to={href}
      >
        {content}
      </NavLink>
    </li>
  );
}
export default NavItem;

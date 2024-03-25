import React from "react";
import { useState } from "react";
import UpperNavbar from "./UpperNavbar";

function Navbar() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <UpperNavbar size={cart.length} />
    </div>
  );
}

export default Navbar;

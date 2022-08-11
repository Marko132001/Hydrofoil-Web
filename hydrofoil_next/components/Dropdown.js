import React, { useState } from "react";


function Dropdown( {navItems} ) {
    const [dropdown, setDropdown] = useState(false);
  
    return (
      <>
        <ul
          className={dropdown ? "projects-submenu clicked" : "projects-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >
          {navItems.data.map((item) => {
            if(item.attributes.navItem.cName === "submenu-item"){
  
                return (
                <li key={item.id}>
                    <a
                    href={item.attributes.navItem.path}
                    className={item.attributes.navItem.cName}
                    onClick={() => setDropdown(false)}
                    >
                    {item.attributes.navItem.title}
                    </a>
                </li>
                );
            }

          })}
        </ul>
      </>
    );
  }
  
  export default Dropdown;
import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navBar">
      <button className ="addBoard" onClick={props.addBoard}>
        + Add a Board
      </button>
    </div>
  )
}

export default Navbar;

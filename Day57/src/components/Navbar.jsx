import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render");
  });

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render.");
  }, []);

  // Case 3: Run only when certain values changed
  useEffect(() => {
    alert("Hey I am running because color was changed");
  }, [color]);

  // Example of Cleanup function
  useEffect(() => {
    alert("HEy welcome to my page. This is the first render of app.jsx");

    return () => {
      alert("component was unmounter");
    };
  }, []);

  return (
    <div>
      <div>I am navbar of {color} color heehee...</div>
    </div>
  );
};

export default Navbar;

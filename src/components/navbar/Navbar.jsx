import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const[active,setActive] = useState(false);//make state variable to check if menu will appear or not
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation(); // hook to get current location so we can check where we are 


  //this function trigger when scorll effect done and it change active state
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
    setOpen(false);
  };

// when scroll happen it will call isActive function and make active true 
  useEffect(()=>{
    window.addEventListener("scroll" , isActive);
    return () => {
      window.removeEventListener("scroll", isActive);};
  },[]) ;


  const currentUser = {
    id: 1,
    username: "Mohannad",
    isSeller: true,
  };
  // const currentUser =null;

  return (
    //if active is true class name will be navbar active so it will take active styles if it was false it never take active class styles
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}> 
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Syverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Syverr Business</span>
          <span>Explore</span>
          {/* if current user is exist this element will appear */}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            // when click open state will change true and false 
            <div className="user" onClick={()=>setOpen(!open)}> 
              <img
                src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {/* if open state true it will display option and it will true when click */}
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to="login" className="link">
              <span>Sign in</span>
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* if active true it will display this elements */}
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>




<div className="navbar bg-blue-500 py-4 px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li > 
        <Link className='text-blue-500'>Ships </Link>
      </li>
      <li>
        <Link className='text-blue-500'>My Bookings</Link>
      </li>
      </ul>
    </div>
   <Link className='text-white font-bold  sm:text-2xl lg-text-4xl'>Ship Tickets</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link className='text-white'>Ships </Link>
      </li>
      <li>
        <Link className='text-white'>My Bookings</Link>
      </li>

    </ul>
  </div>
  <div className="navbar-end">
  <div className="form-control hidden sm:block">
      <input type="text" placeholder="Search" className="input input-bordered w-3/5 md:w-full py-0"  />
    </div>

  <label tabIndex={0} className="btn btn-ghost btn-circle avatar pl-2">
        <div className="w-10 rounded-full">
          <img src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" alt='user'/>
        </div>
      </label>
  </div>
</div>





        </div>
    );
};

export default Navbar;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className=' max-w-screen-xl mx-auto'>
              <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><span className='font-bold text-dark'>Shop</span>
    cart</a>
  </div>
  
  <div className="w-20 rounded-full ">
  <FontAwesomeIcon icon={faPerson} />
    <p className='px-2'>Sign In</p>
  </div>
</div>


        </div>




    );
};

export default Header;
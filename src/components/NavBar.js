import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){

    return(<div>
            <NavLink 
            to="/farmanimals"
            exact 
            >
                <button className="navlinks">FarmAnimals</button>
            </NavLink>
            
            <NavLink 
            to='/feedanimals'
            exact
            >
                <button className="navlinks">FeedAnimals</button>
            </NavLink>
       
    </div>)
}
export default NavBar
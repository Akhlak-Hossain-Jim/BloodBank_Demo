import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo512.png';

function GettingStarted() {
    return (
        <div className='gettingstarted grid_parent grid_twoCol'>
            <img src={logo} alt=''/>
            <section>
                <h3>Have an Account</h3>
			    <Link className='red_w' to='/signin'>Sign In</Link>
                <h3>Not Joined Yet!</h3>
                <Link className='red_w' to='/signup'>Sign Up</Link>
            </section>
        </div>
    )
}

export default GettingStarted

import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom px-5 py-3">
            <div class="container">
                <div className='row'>
                    <div className='col pt-2'> 
                        <Link class="ms-5" to="/"><img src='images/logo.svg' alt='logo' style={{ width: "30%" }} className='ms-5 ' /></Link>
                    </div>
                    <div className='col text-end'><button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{margin:"0 auto"}}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="/signup">SignUp</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="/about">About</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="/products">Products</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="/pricing">Pricing</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="/support">Support</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link class="nav-link active" to="#"><i class="fa-solid fa-bars"></i></Link>
                                </li>

                            </ul>

                        </div></div>

                </div>
            </div>
        </nav>



    );
}

export default Navbar;
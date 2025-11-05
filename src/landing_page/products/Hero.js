import React from "react";
function Hero() {
    return (<div className="container  ">
        <div className="row text-center m-5" >
            <h3 className="mt-5">Zerodha Products</h3>
               <h5 className="mt-2" style={{fontWeight:"400"}}>Sleek, modern, and intuitive trading platforms</h5> 
               <p className="mt-3">Check out our <a href='#' className='mt-3' style={{textDecoration:"none"}}> investment offerings&#8594;</a> </p>
        </div>
        <hr className="text-muted mb-5" />
        </div>);
}

export default Hero;
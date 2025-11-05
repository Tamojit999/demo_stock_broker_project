import React from "react";
function Hero() {
    return ( <div className="container-fluid  bg-body-tertiary px-5 ">
        <div className="row pt-5 px-5">
            <div className="container-fluid d-flex justify-content-between align-items-center"> <div className="text-center"><h1>Support Portal</h1></div>
         <button className='p-2 px-4 btn btn-primary fs-5' >Ticket</button></div>
        </div>
        <div className="row pt-4 px-5 mb-5 pb-5 ">
            <input type="text" placeholder=" 🔍︎ Eg: How do i open my account, How do i activate F&O..." className="py-3" style={{borderRadius:"15px",border:"1px solid Lightgray"}}/>
        </div>
    </div> );
}

export default Hero;
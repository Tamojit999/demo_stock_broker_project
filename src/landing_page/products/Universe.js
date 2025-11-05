import React from 'react';
function Universe() {
    return (<div className="container  ">
        <div className="row text-center m-5" >
            <h4 style={{ fontWeight: "400" }}>Want to know more about our technology stack? Check out the  <a href="#" style={{ textDecoration: "none" }}> Zerodha.tech</a> blog.</h4>
        </div>
        <div className="row text-center m-5" >
            <h3 className='mt-5'>The Zerodha Universe</h3>
            <p className='text-muted' >Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row   " >
            <div className="col-2">
            </div>
            <div className="col-3 text-center">
                <div className='mb-2'><img src="images\zerodhaFundhouse.png" style={{ width: "65%" }} /></div>

                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Our assert management venture <br />that is creating simple and transparent index funds to help you sava for your goals.</a>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className='mb-4'>
                    <img src="images\sensibullLogo.svg" style={{ width: "65%" }} />
                </div>
                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Options trading platform that lets you create strategies,analyze positions, and examine dat points like open interest, FLL/DLL,and more.</a>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className='mb-2'>
                    <img src="images\tijori.svg" style={{ width: "45%" }} />
                </div>
                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Investment research platform that offers detailed insights on stocks, sectors,supply chains, and more.</a>
                </div>
            </div>
            <div className="col-2">
            </div>
        </div>
        <div className="row mt-5 mb-5" >
        </div>
        <div className="row " >
            <div className="col-2">
            </div>
            <div className="col-3 text-center">
                <div className='mb-2'><img src="images\streakLogo.png" style={{ width: "65%" }} /></div>

                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Systematic trading platform that allows you to create and backtest stategies without coding. </a>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className='mb-4'>
                    <img src="images\smallcaseLogo.png" style={{ width: "65%" }} />
                </div>
                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Thematic investing plaform that help you invest in diversified baskets of stocks on ETFs </a>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className='mb-2'>
                    <img src="images\dittoLogo.png" style={{ width: "45%" }} />
                </div>
                <div>
                    <a href='#' className='text-muted' style={{ textDecoration: "none", fontSize: "12px" }}>Personalized advice on life and health insurance. No span and no mis-selling</a>
                </div> 
            </div>
            <div className="col-2">
            </div>
        </div>
        <div className="row mt-5 text-center " >
            <div className='col-2'>             </div>
            <div className='col-9' style={{display:"flex",flexWrap:"wrap"}}>                
                <button className='p-2 px-4 btn btn-primary fs-5 mb-5' style={{ margin: "0 auto" }}>SignUp now</button></div>
            <div className='col-2'>             </div>


        </div>




    </div>);
}

export default Universe;
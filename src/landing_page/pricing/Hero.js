import React from "react";
function Hero() {
    return ( <div className="container ">
        <div className="row text-center m-5 mb-5">
            <h3 className="mt-5">Charges.</h3>
            <h5 className="text-muted mt-2 mb-5" style={{fontWeight:"500"}}>List of all charges and taxes</h5> 
        </div>
        <div className="row mt-5 mb-5">
            <div className="col-4 text-center">
                <img src="images/pricing0.svg" style={{width:"70%"}} />
                <h4 className="">Free equity delivery</h4>
                <p className="text-muted mt-3" style={{lineHeight:"25px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 text-center">
              <img src="images\intradayTrades.svg" style={{width:"70%"}} />
                <h4 className="">Intraday and F&O trades</h4>
                <p className="text-muted mt-3" style={{lineHeight:"25px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 text-center">
                <img src="images/pricing0.svg" style={{width:"70%"}} />
                <h4 className="">Free direct MF</h4>
                <p className="text-muted mt-3" style={{lineHeight:"25px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div> );
}

export default Hero;
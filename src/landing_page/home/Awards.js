import React from 'react';
function Awards() {
    return ( 
    <div className='container mt-5 mb-5'>
        <div className='row ' style={{display:"flex",  flexWrap:"wrap", alignItems:"center"}}>
            <div className='col-6  text-center '>
                <img src='images\largestBroker.svg' className='mb-5' style={{width:"90%"}}/>
                </div>
            <div className='col-6 mt-5 '>
                <h2>Largest stock broker in india </h2>
                <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and  Govt. Securities </li>
                        </ul>
                    </div>
                </div>
                <img src="images\pressLogos.png" alt="presslogo" className='mt-5 mb-5' style={{width:"90%"}}/>
            </div>
        </div>
        
    </div> 
    );
}

export default Awards;
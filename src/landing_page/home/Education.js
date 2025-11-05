import React from 'react';
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col'>
                    <img src='images/education.svg'  />
                </div>
                <div className='col  '>

                    <h4 className='mt-5'>Free and open market education</h4>
                    <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='mt-2 ' style={{textDecoration:"none"}}>Varsity &#8594;</a>
                     <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href='#' className='mt-2 ' style={{textDecoration:"none"}}>TradingQ&A &#8594;</a>

                </div>
            </div>
        </div>


    );
}

export default Education;
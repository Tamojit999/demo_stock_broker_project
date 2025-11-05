import React from 'react';
function Pricing() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row '>
                <div className='col-4'>
                    <h4>Unbeatable pricing</h4>
                    <p className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href='#' className='mt-3 ' style={{textDecoration:"none"}}>See pricing &#8594;</a>

                </div>
                <div className='col-2'>
                </div>
                <div className='col-6 mb-5 ' >
                    <div className='row  text-center ' >

                        <div className='col-6 py-4 border'>
                            <h2 className='mb-3'>₹0</h2>
                            <p className='text-muted'>Free equity delivery and <br/>direct mutual funds</p>
                        </div>

                        <div className='col-6 py-4  border'>
                            <h2 className='mb-3'>₹20</h2>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>

                    </div>

                </div>
            </div>







        </div>);
}

export default Pricing;
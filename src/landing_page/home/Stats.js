import React from 'react';
function Stats() {
    return (<div className='container mt-5'>
        <div className='row  ' style={{display:"flex",  flexWrap:"wrap", alignItems:"center"}}>
            <div className='col-6'>
                <h2 className='mt-4'>Trust with confidence</h2>
                <h4 className='mt-5'>Customer-first always</h4>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h4 className='mt-4'>No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h4 className='mt-4'>The Zerodha universe</h4>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                 <h4 className='mt-4'>Do better with money</h4>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 mb-5'>
                
                 <img src='images/ecosystem.png' style={{width:"90%"}}/>
                 <div className='text-center'>
                    <a href='#' className='mt-3 ' style={{textDecoration:"none"}}>Explore the products &#8594;</a>
                        
                     <a href='#' className='mt-3' style={{textDecoration:"none"}}>Try Kite demo &#8594;</a>
                    
                 </div>
                 
            </div>
        </div>
    </div>








    );
}

export default Stats;
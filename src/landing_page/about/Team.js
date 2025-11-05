import React from 'react';
function Team() {
    return (
        <div className="container  ">
            <div className="row ">
                <div className="col-6 mt-5 text-center py-5"> 
                    <br/>
                    <img src="images\nithinKamath.jpg" alt="team image" style={{ borderRadius: "50%", width: "55%" }} className='mb-3 mt-5'/>
                    <h5>Nithin Kamath</h5>
                    <p className='mb-5 text-muted'>Founder & CEO</p>
                </div>
                <div className="col-6 mt-5 ">
                    <h4 className='mb-5'>People</h4>
                    
                    <p className='mt-5 py-5' style={{lineHeight:"30px"}} >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/><br/>

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>

                        Playing basketball is his zen.</p>

                </div>


            </div>
        </div>

    );
}

export default Team;
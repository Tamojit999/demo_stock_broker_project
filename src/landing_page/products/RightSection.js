import React from 'react';
function RightSection({ imageURl, title, description, learnmore }) {
    return (<div className='container mt-5 mb-5'>
        <div className='row ' style={{display:"flex",  flexWrap:"wrap", alignItems:"center"}}>
            <div className='col-5 mt-5' style={{ lineHeight: "30px" }}>
                <h2 className='mt-5'>{title}</h2>
                <p className='mt-3'>{description}</p>


                <a href={learnmore} style={{ textDecoration: "none" }}>Learn more &#8594;</a>
                <br />





            </div>
            <div className='col-7 '>
                <img src={imageURl} className='pt-5' style={{ width: "85%" }} />
            </div>
        </div>

    </div>);
}

export default RightSection;
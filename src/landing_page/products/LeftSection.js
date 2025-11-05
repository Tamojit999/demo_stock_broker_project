import React from 'react';
function LeftSection({imageURl,title,description,trydemo,learnmore}) {
    return (  <div className='container mt-5 mb-5'> 
        <div className='row ' style={{display:"flex",  flexWrap:"wrap", alignItems:"center"}}>
            <div className='col-7 '>
                <img src={imageURl}  style={{width:"85%"}}/>
                </div>
            <div className='col-5 mt-5 'style={{lineHeight:"30px"}}>
                <h2>{title}</h2>
                <p className='mt-3'>{description}</p>
               
                    <div>
                        <a href={trydemo} className='mt-3' style={{textDecoration:"none"}}>Try demo &#8594;</a>
                        &nbsp; &nbsp; &nbsp;
                         <a href={learnmore} className='mt-3 ms-5' style={{textDecoration:"none"}}>Learn more &#8594;</a>
                        <br/>
                        <img src="images/googlePlayBadge.svg" className='mt-3'  />
                        <img src="images/appstoreBadge.svg" className='ms-3 mt-3' />
                        
                    </div>
                   
                
            </div>
        </div>
        
    </div>  );
}

export default LeftSection;
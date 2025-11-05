import React from 'react';
function TicketComponent({id,target,icon,title,feature1,feature2,feature3,feature4,feature5}) {
    return (
    
        <div>
        <nav class="navbar bg-body-tertiary mt-4 py-3" style={{border:"1px solid lightgray", borderRadius:"15px"}} >

            <div className="container-fluid d-flex justify-content-between align-items-center">
                
                <div className='text-center' style={{fontSize:"24px"}}> <i class={icon}></i> &nbsp;{title} </div>
                
                
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={target}
                    aria-controls={id}
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse" id={id}>
                <ul class="navbar-nav mx-3 mt-2">
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">{feature1}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{feature2}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{feature3}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{feature4}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{feature5}</a>
                    </li>
                </ul>
            </div>

        </nav >
        </div>
    );
      
        
    
}

export default TicketComponent;
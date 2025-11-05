import React from 'react';
import TicketComponent from './TicketComponent';

function CreateTicket() {
    return (
    
    <div className='container mt-5'>
        
      <TicketComponent id="navbarNav1" target="#navbarNav1" icon="fa-solid fa-circle-plus" title="Account Opening" feature1="Resident individual" feature2="Minor" feature3="Non Resident Indian (NRI)" feature4="Company, Partnership, HUF and LLP" feature5="Glossary"/>

       <TicketComponent id="navbarNav2" target="#navbarNav2" icon="fa-solid fa-user" title="Your Zerodha Account" feature1="Your Profile" feature2="Account modification" feature3="Client Master Report (CMR) and Depository Participant (DP)" feature4="Nomination" feature5="Transfer and conversion of securities"/>

       <TicketComponent id="navbarNav3" target="#navbarNav3" icon="fa-solid fa-arrow-left" title="Kite" feature1="IPO" feature2="Trading FAQs" feature3="Margin Trading Facility (MTF) and Margins" feature4="Charts and orders" feature5="Alerts and Nudges"/>

       <TicketComponent id="navbarNav4" target="#navbarNav4" icon="fa-solid fa-indian-rupee-sign" title="Funds" feature1="Add money" feature2="Withdraw money" feature3="Add bank accounts" feature4="eMandates" feature5=""/>

        
        <TicketComponent id="navbarNav5" target="#navbarNav5" icon="fa-solid fa-terminal" title="Console" feature1="Portfolio" feature2="Corporate actions" feature3="Funds statement" feature4="Reports" feature5="Segments"/>

        <TicketComponent id="navbarNav6" target="#navbarNav6" icon="fa-solid fa-coins" title="Coin" feature1="Mutual funds" feature2="National Pension Scheme (NPS)" feature3="Fixed Deposit (FD)" feature4="Features on Coin" feature5="Payments and Orders"/>
        
    </div >);
}

export default CreateTicket;
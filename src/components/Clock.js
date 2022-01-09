import React from 'react'
import "../components/Clock.css";
function Clock() {
    return (
        <div className='main-container'>
            <button className="toggle">Dark Mode</button>
        <div className='clock-container'>
          <div className="clock">
            <div className='needle hour'></div>
            <div className='needle minute'></div>
            <div className='needle second'></div>
            <div className='center-point'></div>
        </div> 
            <div className='time'>12:00</div>
            <div className='date'>Monday, Nov<span className='circle'>2</span></div>
        </div>
        </div>

    )
}

export default Clock;

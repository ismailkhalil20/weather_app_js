import React from 'react'

export default function MainData({today, City}) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
    const today1  = new Date(today[0].created);


    return (
        <div>
            <span>{Math.floor(today[0].the_temp)}&deg;</span>
            <div>
                <h5>{City}</h5>
                <p>{today1.toLocaleDateString("en-US", options)}</p>
              
            </div>
            {/* add an svg here to show the weather condition
            

            
            
            */}
            
        </div>
    )
}

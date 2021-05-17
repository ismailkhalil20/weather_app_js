import React from 'react'

export default function MainData({today, City}) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
    const today1  = new Date(today[0].created);


    return (
        <div className="text-white space-x-2 row-start-1 row-end-4 col-span-4 flex items-end md:pl-20">
            <span className="text-7xl">{Math.floor(today[0].the_temp)}&deg;</span>
            <div className="">
                <h5 className="text-3xl">{City}</h5>
                <p className="text-sm">{today1.toLocaleDateString("en-US", options)}</p>
            </div>
            {/* add an svg here to show the weather condition
            

            
            
            */}
            
        </div>
    )
}

import React from 'react'
import Card from './../../components/Card/Card';

export default function Cards(Day, SVG, Temp) {
    return (
        <div>
            <Card Day={Day} SVG={SVG} Temp={Temp}/>
        </div>
    )
}

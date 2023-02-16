import React, { useState } from 'react';
import ShipList from '../../data/ships.json'


const PopularSection = () => {

const [ships, setShips] = useState(ShipList)

console.log(ships);



    return (
        <div>
            <h2 className='text-blue-500 font-bold text-2xl md:text-4xl lg:text-4xl my-12 pl-8'>Popular For You</h2>

<div>
    {
        ships.length > 0 && ships.map(ship => {
            return <div> 
                <h5>{ship.title}</h5>

            </div>
        })
    }
</div>

        </div>
    );
};

export default PopularSection;
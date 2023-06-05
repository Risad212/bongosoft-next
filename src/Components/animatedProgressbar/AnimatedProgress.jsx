import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const AnimatedProgress = ({value}) => {
    const [count,setCout] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      if(count != value){
        setCout(count + 1)
      }
    }, 70);
    return () => clearInterval(interval);
    },[count])

    return (
        <div>
            <CircularProgressbar value={count} text={`${value}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#000'}}}/>           
        </div>
    );
};

export default AnimatedProgress;
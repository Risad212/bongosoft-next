import React, { useEffect, useState } from 'react';
import countstyle from './animatedcounter.module.css';

const AnimatedCounter = (props) => {
    const {duration,number,delay} = props.data;
    // let number = "195";
    // let duration = "2";
    
    // number displayed by component
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * delay;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);
    return (
        <div className={countstyle.counter}>
           <span>{count}</span>
        </div>
    );
};

export default AnimatedCounter;
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const AnimatedProgress = ({ valueStart, valueEnd, children }) => {
    return <ProgressBar completed={60} animateOnRender={true}/>;
};
export default AnimatedProgress;

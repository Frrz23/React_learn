import React, { useState } from "react";
import "./Toogleswitch.css";

const Toogleswitch = () => {
    const [ison, setOn] = useState(false);
    const handleToggleSwitch = () => {
        setOn(!ison);
    };

    return (
        <div className="toggle-switch" style={{backgroundColor:ison ? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
            <div className={`switch ${ison ? "on" : "off"}`}>
                <span className="switch-state">{ison ? "on" : "off"}</span>
            </div>
        </div>
    );
};

export default Toogleswitch;

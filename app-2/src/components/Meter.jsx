import React from "react";
import "../styleSheets/Meter.css"

const Meter = ({numClicks}) => {
  return (
    <div className="meter">
        {numClicks}
    </div>
  )
}

export default Meter
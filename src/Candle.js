import React, { useState, useEffect } from "react";
//import "./Candle.scss";

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(80);
  const [isCandleFinished, setIsCandleFinished] = useState(false);

  useEffect(() => {
    console.log("inside use effect");
    const interval = setInterval(() => {
      setCandleHeight((height) => height - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (candleHeight < 10) setIsCandleFinished(true);
  }, [candleHeight]);

  const putNewCandle = () => {
    setCandleHeight(80);
    setIsCandleFinished(false);
  };

  console.log("rendering");
  return (
    <>
        <div>
        {isCandleFinished && (
          <div>
            <button onClick={putNewCandle}>Replace with new candle</button>
          </div>
        )}
      </div>

      <div className="block candleContainer">
        {!isCandleFinished && (
          <div className="candle" style={{ height: `${candleHeight}%` }}>
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        )}
      </div>
    </>
  );
};

export default Candle;
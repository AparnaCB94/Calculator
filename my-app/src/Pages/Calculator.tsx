
import React, { useState } from "react";
import "./calc.css";
// import { useRef, useState } from 'react';
// import "./calc.css";



function Calculator()
 {
  const [input, setInput] = useState("0");
    // Function to handle button clicks
    const handleButtonClick = (value: string) => {
        if (input === "0" || input === "Invalid Input!!") {
            setInput(value);
        } else {
            setInput(input + value);
        }
    };

    // Function to clear the input
    const clearInput = () => {
        setInput("0");
    };
    // Function to calculate the result
    const calculateResult = () => {
        try {
            const result = eval(input);
            if (isNaN(result)) {
                setInput("Invalid Input!!");
            } else {
                setInput(result.toString());
            }
        } catch (error) {
            setInput("Invalid Input!!");
        }
    };

    // remove last character
    const backspace = () => {
        if (input !== "") {
        setInput(input.toString().slice(0, -1));
       } else setInput((prev) => prev.slice(0, -1));
    };

  return (

    <div className="calculator">

      <textarea 
        value={input} 
        className="display" 
        id="display" onChange={(e) => setInput(e.target.value)}
        style={{
          maxHeight: "50%", // Set your desired maximum height
          overflowY: "auto",  // Enable vertical scrolling if the content exceeds the height
        }}/>

      <div className="buttons">

        <span className="button"  onClick={()=>{clearInput()}} id="clear">C</span>

        <span className="button" onClick={()=> handleButtonClick ("/")} >/</span>

        <span className="button" onClick={()=>{ handleButtonClick ("7")}}id="seven">7</span>

        <span className="button" onClick={()=>{ handleButtonClick ("8")}}id="eight">8</span>

        <span className="button" onClick={()=>{ handleButtonClick ("9")}}id="nine">9</span>

        <span className="button" onClick={()=>{ handleButtonClick ("*")}} id="multiply">*</span>

        <span className="button" onClick={()=>{ handleButtonClick ("-")}}id="subtract">-</span>

        <span className="button" onClick={()=>{ handleButtonClick ("4")}}id="four">4</span>

        <span className="button" onClick={()=>{ handleButtonClick ("5")}}id="five">5</span>

        <span className="button" onClick={()=>{ handleButtonClick ("6")}}id="six">6</span>

        <span className="button" onClick={()=>{ handleButtonClick ("+")}}id="add">+</span>

        <span className="button" onClick={()=>{ handleButtonClick ("0")}}id="zero">0</span>

        <span className="button" onClick={()=>{ handleButtonClick ("1")}}id="one">1</span>

        <span className="button" onClick={()=>{ handleButtonClick ("2")}}id="two">2</span>

        <span className="button" onClick={()=>{ handleButtonClick ("3")}}id="three">3</span>

        <span className="button" onClick={()=>{ handleButtonClick (".")}}id="decimal">.</span>

        <span className="button" onClick={()=>{ calculateResult ()}}id="equals">=</span>

      </div>

    </div>

  );

}

export default Calculator;
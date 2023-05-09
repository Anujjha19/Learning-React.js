import React from "react";
  
// importing the custom hook
import useCustomHook from "../useCustomHook";
  
function FirstComponent(props){
  
    // ClickedButton = resetCounter;
    const clickedButton = useCustomHook(0 , "FirstComponent"); 
      
    return (
        <div>
            <h1> This is the First Component</h1>
            <button onClick={clickedButton}> 
                  Click here!
            </button>
        </div>
    );
}
  
export default FirstComponent;
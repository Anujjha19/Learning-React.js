import { useState, useEffect } from "react";

// Remember to start the name of your custom hook with "use"
function useCustomHook(initializer, componentName) {
    const [counter, setCounter] = useState(initializer);
    // Increases the value of counter by 1
    function resetCounter() {
        setCounter(counter + 1);
    }


    useEffect(() => {
        // Some logic that will be used in multiple components
        console.log("The button of the "
            + componentName + " is clicked "
            + counter + " times.");
    }, [counter, componentName]);

    // Calls the useEffect hook if the counter updates
    return resetCounter;
}

export default useCustomHook;

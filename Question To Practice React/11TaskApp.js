// import Task1 from './Components/Task1'
// import Task2 from './Components/Task2'
// import Task3 from './Components/Task3'

// import Task4Card from "./Components/Task4Cards";
// import Task5 from "./Components/Task5";
// import Task6 from "./Components/Task6";
// import Task7 from "./Components/Task7";
// import Task8 from "./Components/Task8";
// import Task9 from "./Components/Task9";
// import Task10 from "./Components/Task10";



// function App() {
//     return (
//         <div className="App">
//             {/* <Task1 /> */}
//             {/* <Task2 /> */}
//             {/* <Task3 /> */}
//             {/* <Task4Card /> */}
//             {/* <Task5 /> */}
//             {/* <Task6 /> */}
//             {/* <Task7 /> */}
//             {/* <Task8 /> */}
//             {/* <Task9 /> */}
//             {/* <Task10 /> */}
//             <Task11 />


//         </div>
//     );
// }

/* import React, { createContext, useReducer } from 'react';
import Task11 from "./Components/Task11";

const MyContext = createContext();

function App() {
    // Define a reducer function
    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    // Use useReducer to manage state with a reducer function
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <MyContext.Provider value={{ count: state.count, dispatch }}>
            <Task11 />
        </MyContext.Provider>
    );
}

export default App;

 */
import React from "react";
// import UseReducer from "./UseReducer";
// import UseRefTask from "./UseRef";
// import UseContext from "./UseContext";

function App() {
    return (
        <div className="App">
    {/* <UseRefTask /> */}
    {/* <UseReducer/> */}
    {/* <UseContext /> */}

        </div>
    );
}
export default App;

//Creating Simple Greeting Website using React JS. Use text boxes for the same. Website will greet you according to time. As if the time is from 5 am to 12 noon it says good morning and colour of good morning must be green. As if the time is from 12 noon to 3 pm it says good afternoon and colour of good morning must be red. And so on.


import React, { useState } from "react";

function Greeting() {

    const [name, setName] = useState("");
    const [timeOfDay, setTimeOfDay] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const getTimeOfDay = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            return { time: "Morning", color: "green" };
        } else if (currentHour >= 12 && currentHour < 15) {
            return { time: "Afternoon", color: "red" };
        } else if (currentHour >= 15 && currentHour < 19) {
            return { time: "Evening", color: "orange" };
        } else {
            return { time: "Night", color: "blue" };
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { time, color } = getTimeOfDay();
        setTimeOfDay({ time, color });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <button type="submit">Greet me!</button>
            </form>
            {timeOfDay && (
                <p style={{ color: timeOfDay.color }}>
                    Good {timeOfDay.time}, {name}!
                </p>
            )}
        </div>
    );
}

export default Greeting;

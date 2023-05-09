//Display the progress bar   {Analysis of 5 student marks}

import React, { useState } from "react";

const ProgressBar = () => {
  const [studentMarks, setStudentMarks] = useState([70, 80, 90, 60, 75]);

  const averageMark =
    studentMarks.reduce((acc, curr) => acc + curr, 0) / studentMarks.length;
  const percentage = (averageMark / 100) * 100;

  return (
    <div>
      <h2>Analysis of 5 student marks</h2>
      <p>Student 1: {studentMarks[0]}</p>
      <p>Student 2: {studentMarks[1]}</p>
      <p>Student 3: {studentMarks[2]}</p>
      <p>Student 4: {studentMarks[3]}</p>
      <p>Student 5: {studentMarks[4]}</p>
      <div style={{ width: "100%", backgroundColor: "#ddd" }}>
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: "green",
            height: "30px"
          }}
        />
      </div>
      <p>Average mark: {averageMark.toFixed(2)}</p>
    </div>
  );
};

export default ProgressBar;

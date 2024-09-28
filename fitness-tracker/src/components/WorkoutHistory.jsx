import React, { useState, useEffect } from 'react';
const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    // Load workout history from local storage or database
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
  }, []);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Workout History</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index} className="mb-2">
            {/* Display workout details */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkoutHistory;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
function WorkoutEntry({ workoutEntry }) {
  const { date, exercises } = workoutEntry;
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">
        <Link to={`/workouts/${date}`}>Workout on {date}</Link>
      </h3>
      {exercises.map((exercise, index) => (
        <div key={index} className="mb-2">
          <h4 className="text-lg font-bold mb-1">{exercise.name}</h4>
          <ul>
            {exercise.sets.map((set, setIndex) => (
              <li key={setIndex} className="mb-1">
                {set.reps} reps, {set.weight} lbs
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default WorkoutEntry;
import React from 'react';
import { useParams } from 'react-router-dom';
function WorkoutDetails({ workouts }) {
  const { date } = useParams();
  const workout = workouts.find((w) => w.date === date);
  if (!workout) {
    return <div>Workout not found</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Workout Details</h1>
      <h2 className="text-2xl font-bold mb-2">Workout on {date}</h2>
      {workout.exercises.map((exercise, index) => (
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
export default WorkoutDetails;
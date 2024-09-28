import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutEntry from './WorkoutEntry';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import WorkoutDetails from './WorkoutDetails'; // Import WorkoutDetails
import ProgressTracker from './ProgressTracker';
import ExerciseList from './ExerciseList';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([]);
  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Workout Logger</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <div className="mt-8">
      <ExerciseList />
        <h2 className="text-2xl font-bold mb-4">Workout History</h2>
        <Routes>
          <Route path="/" element={
            <div>
              {workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
              ) : (
                <ul>
                  {workouts.map((workout, index) => (
                    <WorkoutEntry key={index} workoutEntry={workout} />
                  ))}
                </ul>
              )}
            </div>
          } />
          <Route path="/workouts/:date" element={<WorkoutDetails workouts={workouts} />} />
        </Routes>
      </div>
      <div className="mt-8">
        
      </div>
      <div className="mt-8">
        <ProgressTracker workouts={workouts} />
      </div>
    </div>
  );
}

export default WorkoutLog;
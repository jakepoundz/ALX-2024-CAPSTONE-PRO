import React, { useState } from 'react';
import ExerciseList from './ExerciseList';

function WorkoutForm({ onAddWorkout }) {
  const [exerciseName, setExerciseName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [workoutEntries, setWorkoutEntries] = useState([]);
  const handleExerciseChange = (event) => {
    setExerciseName(event.target.value);
  };
  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const addSet = () => {
    setWorkoutEntries([
      ...workoutEntries,
      {
        reps: reps,
        weight: weight,
      },
    ]);
    setReps('');
    setWeight('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newWorkout = {
      timestamp: Date.now(),
      exercises: [
        {
          name: exerciseName,
          sets: workoutEntries,
        },
      ],
    };
    onAddWorkout(newWorkout);
    setExerciseName('');
    setWorkoutEntries([]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="exercise-name" className="block text-gray-700 font-bold mb-2">

          Exercise Name:
        </label>
        <input
          type="text"
          id="exercise-name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={exerciseName}
          onChange={handleExerciseChange}
        />
         
      </div>
      <div className="mb-4">
        <label htmlFor="reps" className="block text-gray-700 font-bold mb-2">
          Reps:
        </label>
        <input
          type="number"
          id="reps"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={reps}
          onChange={handleRepsChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
          Weight:
        </label>
        <input
          type="number"
          id="weight"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={weight}
          onChange={handleWeightChange}
        />
        <ExerciseList />
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addSet}
      >
        Add Set
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Workout
      </button>
    </form>
  );
}
export default WorkoutForm;
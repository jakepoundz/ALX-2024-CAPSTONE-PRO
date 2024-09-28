import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
function ProgressTracker({ workouts }) {
  // Calculate progress metrics
  const totalWeightLifted = calculateTotalWeightLifted(workouts);
  const averageRepsPerSet = calculateAverageRepsPerSet(workouts);
  const totalWorkouts = workouts.length;
  // Data for the chart (example: total weight lifted over time)
  const chartData = workouts.map((workout, index) => ({
    date: workout.date,
    weightLifted: totalWeightLifted[index], // Assuming totalWeightLifted is an array
  }));
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <div className="mb-4">
        <p>Total Weight Lifted: {totalWeightLifted}</p>
        <p>Average Reps per Set: {averageRepsPerSet}</p>
        <p>Total Workouts: {totalWorkouts}</p>
      </div>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weightLifted" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
// Helper functions to calculate progress metrics
function calculateTotalWeightLifted(workouts) {
  // Implement logic to calculate total weight lifted for each workout
  // Example:
  return workouts.map((workout) => {
    return workout.exercises.reduce((totalWeight, exercise) => {
      return (
        totalWeight +
        exercise.sets.reduce((setSum, set) => setSum + set.weight * set.reps, 0)
      );
    }, 0);
  });
}
function calculateAverageRepsPerSet(workouts) {
  // Implement logic to calculate average reps per set across all workouts
  // Example:
  return workouts.reduce((totalReps, workout) => {
    return (
      totalReps +
      workout.exercises.reduce((exerciseReps, exercise) => {
        return exerciseReps + exercise.sets.reduce((setReps, set) => setReps + set.reps, 0);
      }, 0)
    );
  }, 0) / (workouts.length * workouts.reduce((totalExercises, workout) => totalExercises + workout.exercises.length, 0));
}
export default ProgressTracker;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('https://wger.de/api/v2/exercise/');
        setExercises(response.data.results);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    fetchExercises();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Choose an Exercise</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} className="mb-2">
            <div className="flex items-center">
              <div className="mr-4">
                {/* ... (Optionally display an image or video here) */}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{exercise.name}</h3>
                <p className="text-gray-600">{exercise.description}</p>
                <p className="text-gray-600">
                  Muscle Groups: {exercise.muscle_groups.map((group) => group.name).join(', ')}
                </p>
                <p className="text-gray-600">
                  Sets/Reps: {exercise.recommended_sets} sets x {exercise.recommended_reps} reps
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExerciseList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
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
  // Function to filter exercises based on search term
  const filteredExercises = exercises.filter((exercise) => {
    const nameMatch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    const muscleGroupMatch = exercise.muscle_groups.some((group) => 
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return nameMatch || muscleGroupMatch; 
  });
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Choose an Exercise</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or muscle group"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredExercises.length > 0 ? ( // Display filtered results
          filteredExercises.map((exercise) => (
            <li key={exercise.id} className="mb-2">
              <div className="flex items-center">
                <div className="mr-4">
                  {/* Display an image if available */}
                  {exercise.images && exercise.images.length > 0 && (
                    <img
                      src={exercise.images[0].image} // Get the first image URL
                      alt={exercise.name}
                      className="h-16 w-16 rounded-md object-cover" 
                    />
                  )}
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
          )) 
        ) : (
          <li className="text-gray-500">No exercises found matching your search.</li>
        )}
      </ul>
    </div>
  );
}
export default ExerciseList;
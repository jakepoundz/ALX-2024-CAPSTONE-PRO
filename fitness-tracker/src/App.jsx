import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ExerciseList from './components/ExerciseList';
import WorkoutDetails from './components/WorkoutDetails';
import SearchBar from './components/SearchBar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutEntry from './components/WorkoutEntry';
import ProgressTracker from './components/ProgressTracker';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <SearchBar onSearch={() => {}} /> {/* Handle search */}
        <Routes>
          <Route path="/" element={<WorkoutLog />} />
          <Route path="/history" element={<WorkoutHistory />} />
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/exercise/:exerciseId" element={<ExerciseList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
